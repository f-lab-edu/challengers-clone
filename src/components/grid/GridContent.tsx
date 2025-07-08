import styled from "styled-components";

type GridContentProps = {
  children: React.ReactNode;
  colsCount: number;
};

export default function GridContent({ children, colsCount }: GridContentProps) {
  return <Wrapper cols={colsCount}>{children}</Wrapper>;
}

const Wrapper = styled.div<{ cols: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  place-items: center;
`;
