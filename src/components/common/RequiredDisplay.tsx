import styled, { CSSObject, css } from "styled-components";

type RequiredDisplayProps = {
  css?: CSSObject;
};

const RequiredDisplay = ({ css }: RequiredDisplayProps) => {
  return <Star $css={css}>*</Star>;
};

export default RequiredDisplay;

const Star = styled.span<{ $css?: CSSObject }>`
  color: red;
  margin-top: 4px;
  ${({ $css }) =>
    $css != null &&
    css`
      ${$css}
    `}
`;
