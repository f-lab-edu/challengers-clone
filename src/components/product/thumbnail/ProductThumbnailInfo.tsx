import Brand from "@/components/chip/Brand";
import { PRODUCT_BRAND_COLOR } from "@/constants/product";
import React from "react";
import styled from "styled-components";

const ProductThumbnailInfo = ({
  brand,
  brandId,
  title,
  children,
}: {
  brand: string;
  brandId: keyof typeof PRODUCT_BRAND_COLOR;
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <Brand brandName={brand} brandId={brandId} />
      {children}
      <Title>{title}</Title>
    </>
  );
};

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

export default ProductThumbnailInfo;
