"use client";

import type { HOME_CAROUSEL_ITEM } from "@/type/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Image from "next/image";

type HomeBannerCarouselProps = {
  items: HOME_CAROUSEL_ITEM[];
};

export default function HomeBannerCarousel({ items }: HomeBannerCarouselProps) {
  const route = useRouter();

  const handleClickItem = (itemId: string) => {
    route.push(`/item/${itemId}`);
  };

  if (items == undefined) return <></>;

  return (
    <SwiperWrapper
      modules={[Autoplay]}
      spaceBetween={16}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000 }}
    >
      {items.map((el) => (
        <SwiperSlideContainer
          key={el.itemId}
          onClick={() => handleClickItem(el.itemId)}
        >
          <SlideTextWrapper>
            <SubTitle>{el.subtitle}</SubTitle>
            <Title>{el.title}</Title>
            <CTA>{el.ctaText}</CTA>
          </SlideTextWrapper>
          <SlideImageWrapper>
            <SlideImage
              src={el.imageSrc}
              width={100}
              height={100}
              alt={el.imageAlt}
            />
          </SlideImageWrapper>
        </SwiperSlideContainer>
      ))}
    </SwiperWrapper>
  );
}

const SwiperWrapper = styled(Swiper)`
  width: 100%;
  height: 180px;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

const SwiperSlideContainer = styled(SwiperSlide)`
  display: flex;
  align-items: center;
`;

const SlideTextWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const SlideImageWrapper = styled.div`
  width: 35%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 100%;
`;

const SlideImage = styled(Image)`
  display: flex;
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const SubTitle = styled.h3`
  font-weight: 400;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  white-space: pre-line;
`;

const CTA = styled.span``;
