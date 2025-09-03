import styled, { css, CSSObject } from "styled-components";

type ErrorMessageSize = "xs" | "sm" | "md" | "lg" | "xl";
type ErrorMessageProps = {
  errorMessage: string;
  size?: ErrorMessageSize;
  cssObject?: CSSObject;
};

const ErrorMessage = ({
  errorMessage,
  size = "sm",
  cssObject,
}: ErrorMessageProps) => {
  return (
    <Span $size={size} $cssObject={cssObject}>
      {errorMessage}
    </Span>
  );
};

export default ErrorMessage;

const Span = styled.span<{ $size: ErrorMessageSize; $cssObject?: CSSObject }>`
  color: red;
  position: absolute;
  top: 4px;
  left: 8px;

  ${({ $size }) => sizeMap[$size]}
  ${({ $cssObject }) => $cssObject != null && css($cssObject)}
`;

const sizeMap = {
  xs: css`
    font-size: 10px;
  `,
  sm: css`
    font-size: 12px;
  `,
  md: css`
    font-size: 14px;
  `,
  lg: css`
    font-size: 16px;
  `,
  xl: css`
    font-size: 18px;
  `,
};
