import React from "react";

interface PillButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  variant?: "solid" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
  isLoading?: boolean;
  className?: string;
}

const PillButton: React.FC<PillButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "solid",
  size = "medium",
  isLoading = false,
  className = "",
  style,
}) => {
  const baseStyle = "rounded-full focus:outline-none shadow-md";

  const variantStyles: Record<string, string> = {
    solid:
      "bg-primary text-white hover:bg-blue-600 focus:bg-blue-800 transition duration-300",
    outlined:
      "border border-primary text-primary hover:bg-blue-100 transition duration-300",
    text: "text-primary hover:underline transition duration-300",
  };

  const sizeStyles: Record<string, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-5 py-3 text-lg",
  };

  const disabledStyle =
    "opacity-50 cursor-not-allowed focus:bg-gray-500 hover:bg-gray-500 bg-gray-500";

  const combinedStyle = `${baseStyle} ${variantStyles[variant]} ${
    sizeStyles[size]
  } ${className} ${disabled ? disabledStyle : ""}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedStyle}
      style={style}
    >
      {isLoading ? <div className="loader-small-black" /> : children}
    </button>
  );
};

export default PillButton;
