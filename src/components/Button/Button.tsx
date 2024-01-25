import BaseButton, { BaseButtonProps } from "./bases/BaseButton";
import TextButton, { TextButtonProps } from "./variants/TextButton";
import SocialButton, { SocialButtonProps } from "./variants/SocialButton";

type ButtonVariants =
  | ({ variant: "text" } & TextButtonProps)
  | ({ variant: "social" } & SocialButtonProps)
  | ({ variant: undefined | "base-button" } & BaseButtonProps);

const Button: React.FC<ButtonVariants> = ({ variant, ...props }) => {
  switch (variant) {
    case "text":
      return <TextButton {...(props as TextButtonProps)} />;
    case "social":
      return <SocialButton {...(props as SocialButtonProps)} />;
    default:
      return <BaseButton {...props} />;
  }
};

export { Button };
