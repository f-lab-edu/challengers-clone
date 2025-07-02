"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

type GuideBannerShowButtonProps = {
  buttonName?: string;
  width?: number;
  height?: number;
  background?: string;
  redirectToUrl: string;
};

export default function GuideBannerShowButton({
  buttonName = "보기",
  width = 48,
  height = 36,
  background = "#000",
  redirectToUrl,
}: GuideBannerShowButtonProps) {
  const router = useRouter();

  const handleClickButton = () => {
    router.push(redirectToUrl);
  };

  return (
    <Button
      width={width}
      height={height}
      background={background}
      onClick={handleClickButton}
    >
      {buttonName}
    </Button>
  );
}

const Button = styled.button<{
  width?: number;
  height?: number;
  background?: string;
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: ${({ background }) => `${background}`};
  color: white;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;
