import React from 'react';
import BaseButton, { BaseButtonProps } from '../bases/BaseButton';

export interface ExpandableButtonProps extends BaseButtonProps {
  hoverColor: string;
}

const ExpandableButton: React.FC<ExpandableButtonProps> = ({
  hoverColor,
  ...baseButtonProps
}) => {
  const expandableButtonStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };
  const style = {
    ...expandableButtonStyle,
    ...baseButtonProps,
  };
  const hoverStyle = {
    color: hoverColor,
  };
  return (
    <BaseButton
      {...baseButtonProps}
      style={style}
      hoverStyle={hoverStyle}
    ></BaseButton>
  );
};

export default ExpandableButton;
