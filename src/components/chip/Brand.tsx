import styled from "styled-components";

const COLOR = {
  "olive-young-id": {
    color: "green",
    background: "yellogreen",
  },
  "11st-id": {
    color: "green",
    background: "yellogreen",
  },
  "g-market-id": {
    color: "green",
    background: "yellogreen",
  },
  "musinsa-id": {
    color: "gray",
    background: "lightgray",
  },
};

type BrandProps = {
  brandName: string;
  brandId: keyof typeof COLOR;
};

export default function Brand({ brandName, brandId }: BrandProps) {
  return <BrandName {...COLOR[brandId]}>{brandName}</BrandName>;
}

const BrandName = styled.span<{ color: string; background: string }>`
  width: fit-content;
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  font-size: 14px;
  font-weight: bold;
`;
