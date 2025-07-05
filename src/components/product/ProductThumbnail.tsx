"use client";
import Brand from "@/components/chip/Brand";
import type { HOME_CATEGORY_ITEM } from "@/type/home";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import styled, { css } from "styled-components";
import { FiHeart } from "react-icons/fi";

export default function ProductThumbnail({
  itemId,
  brand,
  brandId,
  cashbackAmount,
  currentCount,
  endTime,
  imageSrc,
  imageAlt,
  isLiked,
  maxCount,
  originalPrice,
  price,
  startTime,
  title,
  priorityLoad,
}: HOME_CATEGORY_ITEM) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/item/${itemId}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <ImageWrapper>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priorityLoad}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <ParticipationStatus>
          <UserIcon />
          {currentCount}명/{maxCount}명
        </ParticipationStatus>
        <LikeButton $isLiked={isLiked} />
      </ImageWrapper>

      <Brand brandName={brand} brandId={brandId} />

      <TimeText>
        {startTime} ~ {endTime}
      </TimeText>

      <Title>{title}</Title>

      <PriceWrapper>
        <Price>{price.toLocaleString()}원</Price>
        <OriginalPrice>{originalPrice.toLocaleString()}원</OriginalPrice>
      </PriceWrapper>

      <CashbackBadge>페이백 {cashbackAmount.toLocaleString()}원</CashbackBadge>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  & > .image-wrapper {
    position: relative;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  overflow: hidden;
`;

const LikeButton = styled(FiHeart)<{ $isLiked: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;

  ${({ $isLiked }) =>
    $isLiked &&
    css`
      filter: brightness(0) saturate(100%) invert(21%) sepia(91%)
        saturate(6196%) hue-rotate(1deg) brightness(93%) contrast(107%);
      fill: #ff0000;
    `}
`;

const ParticipationStatus = styled.div`
  padding: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  min-width: 90px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const UserIcon = styled(FaRegUser)`
  margin-right: 4px;
`;

const TimeText = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: #888;
`;

const Title = styled.div`
  margin-top: 4px;
  font-size: 14px;
  font-weight: bold;
  color: #222;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 40px; /* 고정 높이: 20px * 2줄 */
`;

const PriceWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 22px; /* 가격 높이 강제 통일 */
`;

const Price = styled.span`
  color: #0077ff;
  font-size: 16px;
  font-weight: bold;
`;

const OriginalPrice = styled.span`
  color: #999;
  font-size: 14px;
  text-decoration: line-through;
`;

const CashbackBadge = styled.div`
  margin-top: 4px;
  background-color: #1976d2;
  color: white;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  padding: 4px 8px;
  display: inline-block;
  width: fit-content;
  height: 28px;
  display: flex;
  align-items: center;
`;
