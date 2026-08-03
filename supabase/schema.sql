-- ============================================================================
-- MySpawn Admin — core database schema (Supabase / Postgres)
-- Run this once in your Supabase project:  SQL Editor → New query → paste → Run
-- Security model: Row Level Security ON everywhere, admin-only access.
-- ============================================================================

-- 1) Admin allowlist — who is allowed to use the admin panel at all
create table if not exists public.admin_users (
  user_id  uuid primary key references auth.users(id) on delete cascade,
  email    text,
  added_at timestamptz default now()
);

-- helper: is the currently logged-in user an admin?
create or replace function public.is_admin()
returns boolean language sql security definer stable as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;

-- 2) Members  (powers the "Users" view)
create table if not exists public.members (
  id           uuid primary key default gen_random_uuid(),
  member_code  text unique,                     -- e.g. MSPN-00231
  name         text not null,
  email        text unique not null,
  status       text not null default 'active',  -- active | inactive
  vault_status text not null default 'empty',   -- active | empty
  storage_gb   numeric not null default 0,
  signup_at    timestamptz default now(),
  last_login_at timestamptz,
  created_at   timestamptz default now()
);

-- 3) Samples  (DNA samples in the biobank)
create table if not exists public.samples (
  id          uuid primary key default gen_random_uuid(),
  member_id   uuid references public.members(id) on delete cascade,
  sample_code text unique,
  status      text not null default 'received', -- received | accessioned | stored
  location    text,                             -- e.g. GenVault, New Jersey
  received_at timestamptz default now()
);

-- 4) Orders / payments
create table if not exists public.orders (
  id           uuid primary key default gen_random_uuid(),
  member_id    uuid references public.members(id) on delete set null,
  amount_cents integer not null default 0,
  kind         text not null default 'kit',     -- kit | renewal
  status       text not null default 'paid',
  created_at   timestamptz default now()
);

-- 5) Vaults  (digital memory storage per member)
create table if not exists public.vaults (
  id         uuid primary key default gen_random_uuid(),
  member_id  uuid references public.members(id) on delete cascade,
  items      integer not null default 0,
  storage_gb numeric not null default 0,
  updated_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security: only admins can read or write these tables
-- ---------------------------------------------------------------------------
alter table public.members     enable row level security;
alter table public.samples     enable row level security;
alter table public.orders      enable row level security;
alter table public.vaults      enable row level security;
alter table public.admin_users enable row level security;

create policy "admin all - members" on public.members for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all - samples" on public.samples for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all - orders"  on public.orders  for all using (public.is_admin()) with check (public.is_admin());
create policy "admin all - vaults"  on public.vaults  for all using (public.is_admin()) with check (public.is_admin());
create policy "read own admin row"  on public.admin_users for select using (user_id = auth.uid());

-- ---------------------------------------------------------------------------
-- Optional: a few demo members so the Users view shows something immediately.
-- Delete this block for a clean production database.
-- ---------------------------------------------------------------------------
insert into public.members (member_code, name, email, status, vault_status, storage_gb) values
  ('MSPN-00231','Maya Lindqvist','maya.l@example.com','active','active',2.4),
  ('MSPN-00244','Sofia Costa','sofia.c@example.com','active','active',3.1),
  ('MSPN-00289','Ravi Kapoor','ravi.k@example.com','active','empty',0.0)
on conflict (email) do nothing;
