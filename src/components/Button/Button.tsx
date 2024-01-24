import BaseButton, { BaseButtonProps } from "./bases/BaseButton";
import ExpandableButton, {
  ExpandableButtonProps,
} from "./variants/ExpandableNavButton";
import TextButton, { TextButtonProps } from "./variants/TextButton";
import SocialButton, { SocialButtonProps } from "./variants/SocialButton";

type ButtonVariants =
  | ({ variant: "text" } & TextButtonProps)
  | ({ variant: "expandable" } & ExpandableButtonProps)
  | ({ variant: "social" } & SocialButtonProps)
  | ({ variant: undefined | "base-button" } & BaseButtonProps);

const Button: React.FC<ButtonVariants> = ({ variant, ...props }) => {
  switch (variant) {
    case "text":
      return <TextButton {...(props as TextButtonProps)} />;
    case "expandable":
      return <ExpandableButton {...(props as ExpandableButtonProps)} />;
    case "social":
      return <SocialButton {...(props as SocialButtonProps)} />;
    default:
      return <BaseButton {...props} />;
  }
};

export { Button };
