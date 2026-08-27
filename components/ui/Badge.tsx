import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "slate" | "cyan" | "outline" | "warning" | "danger" | "success";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "brand",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    brand: "bg-brand-50 text-brand-800 border border-brand-200/60 font-medium",
    cyan: "bg-cyan-50 text-cyan-800 border border-cyan-200 font-medium",
    slate: "bg-slate-100 text-slate-700 border border-slate-200 font-medium",
    outline: "bg-transparent text-slate-700 border border-slate-300 font-medium",
    warning: "bg-amber-50 text-amber-800 border border-amber-200 font-medium",
    danger: "bg-red-50 text-red-700 border border-red-200 font-medium",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] rounded-md",
    md: "px-2.5 py-1 text-xs rounded-lg",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-sans tracking-tight transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
