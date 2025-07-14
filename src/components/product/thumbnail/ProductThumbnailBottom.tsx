import { ParticipationStatus, TimeText, UserIcon } from "@/constants/product";
import React from "react";
import styled, { css } from "styled-components";

const ProductThumbnailBottom = ({
  periods,
}: {
  periods: {
    time: string;
    currentCount: number;
    maxCount: number;
    isSoldOut: boolean;
  }[];
}) => {
  return (
    <Wrapper>
      {periods.map(({ time, currentCount, maxCount, isSoldOut }, idx) => {
        const date = time.split(" ")[0];
        const _time = time.split(" ").slice(1).join(" ");
        return (
          <Item key={_time + idx} $isSoldOut={isSoldOut}>
            <Content>
              <TimeText>{date}</TimeText>
              <TimeText>{_time}</TimeText>
              {isSoldOut ? (
                <span>선착순 마감</span>
              ) : (
                <ParticipationStatus $isAbsolute={false}>
                  <UserIcon />
                  {currentCount}명/{maxCount}명
                </ParticipationStatus>
              )}
            </Content>
          </Item>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  gap: 8px;
  padding: 8px;
  width: 100%;
  overflow-x: scroll;
`;

const Item = styled.li<{ $isSoldOut: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 140px;
  min-width: 140px;
  padding: 8px 0;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: #fff;
  color: #888;

  & span {
    font-size: 13px;
  }

  ${({ $isSoldOut }) =>
    $isSoldOut &&
    css`
      background-color: #ddd;
    `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ProductThumbnailBottom;
