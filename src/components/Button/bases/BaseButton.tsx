import React, { useState } from "react";

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hoverStyle?: React.CSSProperties;
  title: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  title,
  hoverStyle,
  style,
  children,
  ...nativeProps
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        ...(isHovered ? hoverStyle : {}),
      }}
      {...nativeProps}
    >
      {title}
      {children}
    </button>
  );
};

export default BaseButton;
