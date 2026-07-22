import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-heading font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-bright/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deeper disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-violet via-violet-bright to-teal text-white shadow-glow-violet hover:shadow-glow-teal hover:brightness-110 active:scale-[0.98]",
        ghost:
          "border border-white/15 bg-white/[0.03] text-offwhite backdrop-blur-sm hover:border-teal/50 hover:bg-white/[0.06] hover:text-white hover:shadow-glow-teal active:scale-[0.98]",
        subtle:
          "bg-white/[0.06] text-offwhite hover:bg-white/[0.1] active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
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
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
