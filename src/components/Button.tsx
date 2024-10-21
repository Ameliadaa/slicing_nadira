
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline"; 
  size?: "sm" | "md" | "lg"; 
  disabled?: boolean;
  className?: string; 
  icon?: ReactNode; 
}

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  icon,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center font-semibold  transition duration-300 ease-in-out focus:outline-none";
  
  const variants = {
    primary: "bg-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white text-white uppercase focus:border-none",
    secondary: "bg-secondary hover:bg-primary text-white uppercase focus:bg-primary focus:border-none ",
    outline: " bg-transparent border border-primary uppercase text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:border-none ",
   
  };

  const sizes = {
    sm: "py-1.5 text-center text-mobile-xs",
    md: "py-2 text-center text-base",
    lg: "py-3 py-3 text-center text-base",

  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabledStyles,
        className 
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
