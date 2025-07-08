"use client";
import Brand from "@/components/chip/Brand";
import type { HOME_CATEGORY_ITEM } from "@/type/home";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import styled from "styled-components";

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
}: HOME_CATEGORY_ITEM) {
  return (
    <Wrapper>
      <div className="image-wrapper">
        <Image src={imageSrc} alt={imageAlt} width={220} height={220} />
        <ParticipationStatus>
          <UserIcon width={8} height={8} />
          {currentCount}명/{maxCount}명
        </ParticipationStatus>
      </div>
      <Brand brandName={brand} brandId={brandId} />
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  & > div {
    position: relative;
  }
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
