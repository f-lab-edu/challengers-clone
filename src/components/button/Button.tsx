import { ButtonStyle, ButtonType } from "@/constants/button";
import styled from "styled-components";

type ButtonTypeVariant = keyof typeof ButtonType;
type ButtonStyleVariant = keyof typeof ButtonStyle;

type ButtonProps = {
  buttonText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType: ButtonTypeVariant;
  buttonStyle: ButtonStyleVariant;
  rest?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export default function Button({
  buttonText,
  onClick,
  buttonType,
  buttonStyle,
  ...rest
}: ButtonProps) {
  return (
    <ButtonWrapper
      onClick={onClick}
      $buttonType={buttonType}
      $buttonStyle={buttonStyle}
      {...rest}
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
