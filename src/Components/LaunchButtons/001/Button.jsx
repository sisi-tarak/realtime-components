import React from "react";

// Helper function to replace cn utility
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Function to generate button variant classes
function getButtonVariants({
  variant = "default",
  size = "default",
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0";

  const variantClasses = {
    default:
      "bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground shadow-sm shadow-black/5 hover:bg-destructive/90",
    outline:
      "border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground",
    secondary:
      "bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-lg px-3 text-xs",
    lg: "h-10 rounded-lg px-8",
    icon: "h-9 w-9",
  };

  return classNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

export const Button = React.forwardRef((props, ref) => {
  const {
    className,
    variant = "default",
    size = "default",
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={getButtonVariants({ variant, size, className })}
      ref={ref}
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
