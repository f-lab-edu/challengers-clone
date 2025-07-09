import styled from "styled-components";

type ScrollableAreaProps = {
  children: React.ReactNode;
};

export default function ScrollableArea({ children }: ScrollableAreaProps) {
  return <ScrollableAreaWrapper>{children}</ScrollableAreaWrapper>;
}

const ScrollableAreaWrapper = styled.ul`
  display: flex;
  padding: 12px 0;
  gap: 4px;
  overflow-x: scroll;
`;
