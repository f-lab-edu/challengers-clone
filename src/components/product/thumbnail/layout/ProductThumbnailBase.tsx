"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styled, { css } from "styled-components";

type ProductThumbnailBaseProps = {
  children: React.ReactNode;
  itemId: string;
};
const ProductThumbnailBase = ({
  children,
  itemId,
}: ProductThumbnailBaseProps) => {
  const router = useRouter();
  const childrenCount = React.Children.count(children);
  const needsFullWidth = childrenCount > 1;
  const childrenArray = React.Children.toArray(children);
  const bottomComponent = childrenCount > 1 ? childrenArray.pop() : null;

  const handleClick = () => {
    router.push(`/item/${itemId}`);
  };

  return (
    <Container>
      <Wrapper $needsFullWidth={needsFullWidth} onClick={handleClick}>
        {childrenArray}
      </Wrapper>
      {bottomComponent}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  overflow: hidden;
`;

const Wrapper = styled.li<{ $needsFullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ $needsFullWidth }) =>
    $needsFullWidth &&
    css`
      width: 100%;
      flex-direction: row;
    `}

  & > .image-wrapper {
    position: relative;
  }
`;

export default ProductThumbnailBase;
