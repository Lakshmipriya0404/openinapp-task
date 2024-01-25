import React from "react";
import BaseButton, { BaseButtonProps } from "../bases/BaseButton";
import Image from "next/image";

export interface SocialButtonProps extends BaseButtonProps {
  socialButtonName: string;
  imgPath: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  imgPath,
  socialButtonName,
  ...baseButtonProps
}) => {
  const socialButtonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    border: "1px solid rgba(0,0,0,0.08)",
    cursor: "pointer",
    backgroundColor: "transparent",
    fontSize: "14px",
    padding: "10px 20px",
    borderRadius: "6px",
  };
  const iconStyle: React.CSSProperties = {
    marginLeft: "10px",
  };
  const style = {
    ...socialButtonStyle,
    ...baseButtonProps.style,
  };
  const hoverStyle = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <BaseButton {...baseButtonProps} style={style} hoverStyle={hoverStyle}>
      <Image
        src={imgPath}
        alt={""}
        width={"30"}
        height={"30"}
        style={{ marginRight: "10px" }}
      />
      <span style={{ whiteSpace: "nowrap" }}>
        Sign in with {socialButtonName}
      </span>
      <Image
        src="/icon-right-arrow.svg"
        alt=""
        width={16}
        height={16}
        style={{ marginLeft: "10px" }}
      />
    </BaseButton>
  );
};

export default SocialButton;
