import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full font-heading font-semibold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-bright/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deeper disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-violet via-violet-bright to-teal text-white shadow-sheen hover:shadow-glow-violet hover:brightness-[1.08] active:scale-[0.98]",
        light:
          "bg-offwhite text-navy-deeper hover:bg-white hover:shadow-glow-violet active:scale-[0.98]",
        ghost:
          "border border-white/15 bg-white/[0.02] text-offwhite backdrop-blur-sm hover:border-white/35 hover:bg-white/[0.05] hover:text-white active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-[15px]",
        sm: "h-10 px-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {/* Sheen sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
      />
      <span className="relative inline-flex items-center gap-2.5">{children}</span>
    </button>
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
