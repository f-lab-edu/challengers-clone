"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import Button from "@/components/button/Button";
import { OnboardingData } from "@/constants/constants";
import Image from "next/image";

export default function OnboardingMain() {
  return (
    <Wrapper>
      <_Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {OnboardingData.map((el) => (
          <_SwiperSlide key={el.id}>
            <div className="image-wrapper">
              <Image
                src={el.image}
                alt={`${el.title} image`}
                width={100}
                height={100}
              />
            </div>
            <span>{el.title}</span>
          </_SwiperSlide>
        ))}
      </_Swiper>
      <Button
        buttonText="나중에 할래요"
        buttonType="text"
        buttonStyle="base"
        onClick={() => {}}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const _Swiper = styled(Swiper)`
  width: 100%;
  height: 80%;
  position: relative;

  &.swiper {
    overflow: visible;
  }

  & .swiper-pagination {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

const _SwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 32px 16px;

  & .image-wrapper {
    width: 80%;
    height: 80%;
    border-radius: 60px;
    border: 5px solid #007aff;
    margin-bottom: 20px;
    overflow: hidden;
    background: #ddd;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & span {
    font-size: 20px;
    font-weight: 600;
    color: #000;
  }
`;
