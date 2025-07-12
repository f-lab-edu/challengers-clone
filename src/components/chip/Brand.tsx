import { PRODUCT_BRAND_COLOR } from "@/constants/product";
import styled from "styled-components";

type BrandProps = {
  brandName: string;
  brandId: keyof typeof PRODUCT_BRAND_COLOR;
};

export default function Brand({ brandName, brandId }: BrandProps) {
  return <BrandName {...PRODUCT_BRAND_COLOR[brandId]}>{brandName}</BrandName>;
}

const BrandName = styled.span<{ color: string; $background: string }>`
  width: fit-content;
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  background: ${({ $background }) => $background};
  font-size: 14px;
  font-weight: bold;
`;
