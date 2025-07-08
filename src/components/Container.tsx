"use client";
import styled from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
