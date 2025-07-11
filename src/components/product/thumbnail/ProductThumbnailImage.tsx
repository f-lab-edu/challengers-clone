import Image from "next/image";
import React from "react";
import { FiHeart } from "react-icons/fi";
import styled, { css } from "styled-components";

const ProductThumbnailImage = ({
  imageSrc,
  imageAlt,
  priorityLoad,
  isSoldOut,
  isLiked,
  children,
}: {
  imageSrc: string;
  imageAlt: string;
  priorityLoad: boolean;
  isSoldOut: boolean;
  isLiked: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <ImageWrapper>
      <Image src={imageSrc} alt={imageAlt} fill priority={priorityLoad} />
      {isSoldOut && (
        <SoldOut>
          <span>선착순 마감</span>
        </SoldOut>
      )}
      {children}
      <LikeButton $isLiked={isLiked} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  overflow: hidden;
`;

const SoldOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  padding: 8px;
  border-radius: 8px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    border: 2px solid white;
    padding: 2px 4px;
    border-radius: 4px;
    transform: rotate(-20deg);
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`;

const LikeButton = styled(FiHeart)<{ $isLiked: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
  z-index: 11;

  ${({ $isLiked }) =>
    $isLiked &&
    css`
      filter: brightness(0) saturate(100%) invert(21%) sepia(91%)
        saturate(6196%) hue-rotate(1deg) brightness(93%) contrast(107%);
      fill: #ff0000;
    `}
`;

export default ProductThumbnailImage;
