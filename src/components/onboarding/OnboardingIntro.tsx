"use client";

import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

type OnboardingIntroProps = {
  handleClickStepButton: React.MouseEventHandler<HTMLButtonElement>;
};

export default function OnboardingIntro({
  handleClickStepButton,
}: OnboardingIntroProps) {
  return (
    <Wrapper>
      <Title>{"쇼핑 방법을 알아볼까요?\n 정말 쉬워서 놀랄거에요!"}</Title>

      <Image
        src="/images/onboarding/onboarding-1.png"
        alt="onboarding"
        width={100}
        height={100}
      />

      <ButtonGroup>
        <Button
          data-type="start"
          buttonText="튜토리얼 시작하기"
          buttonType="primary"
          buttonStyle="fullWidth"
          onClick={handleClickStepButton}
        />
        <Button
          data-type="prev"
          buttonText="나중에 할래요"
          buttonType="text"
          buttonStyle="base"
          onClick={handleClickStepButton}
        />
      </ButtonGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  white-space: pre-line;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
