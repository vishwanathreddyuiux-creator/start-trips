import { Link } from "react-router";
import { ReactNode } from "react";

interface GradientButtonProps {
  to?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function GradientButton({ to, onClick, children, className = "", variant = "primary" }: GradientButtonProps) {
  const baseClasses = "px-6 py-3 rounded-xl b2 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-block text-center";
  
  const variantClasses = variant === "primary"
    ? "bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white"
    : "bg-white text-brand-dark border-2 border-brand-primary";

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
