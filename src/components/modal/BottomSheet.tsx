'use client';

import Image from "next/image";
import styled from "styled-components";

type BottomSheetProps = {
  data: {
    id: string;
    imageSrc: string;
    itemId: string;
  }[]
}

export default function BottomSheet({ data }: BottomSheetProps) {

  return (
    <Dimmed>
      <Wrapper>
        <ImageWrapper>
          <ItemImage src={data?.[0].imageSrc} width={200} height={10} alt={`${data?.[0].itemId} image`} />
        </ImageWrapper>
        <ButtonWrapper>
          <Close>오늘 하루 보지 않기</Close>
          <Close>닫기</Close>
        </ButtonWrapper>
      </Wrapper>
    </Dimmed>
  )
}


const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
  display: flex;
  flex-direction: column-reverse;
`;

const Wrapper = styled.data`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
`
const ImageWrapper = styled.div`
  display: flex;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 85%;
  overflow: hidden;
`

const ItemImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15%;
  background: white
`

const Close = styled.button`
  font-size: 14px;
  color: gray;
`;