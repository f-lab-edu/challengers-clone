import { ButtonStyle, ButtonType } from "@/constants/button";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonTypeVariant = keyof typeof ButtonType;
type ButtonStyleVariant = keyof typeof ButtonStyle;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonText: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType: ButtonTypeVariant;
  buttonStyle: ButtonStyleVariant;
};

export default function Button({
  buttonText,
  onClick,
  buttonType,
  buttonStyle,
  ...props
}: ButtonProps) {
  return (
    <ButtonWrapper
      onClick={onClick}
      $buttonType={buttonType}
      $buttonStyle={buttonStyle}
      {...props}
    >
      {buttonText}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{
  $buttonType: ButtonTypeVariant;
  $buttonStyle: ButtonStyleVariant;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 0;
  font-size: 16px;
  font-weight: 700;

  ${({ $buttonType }) => ButtonType[$buttonType]}
  ${({ $buttonStyle }) => ButtonStyle[$buttonStyle]}
`;
