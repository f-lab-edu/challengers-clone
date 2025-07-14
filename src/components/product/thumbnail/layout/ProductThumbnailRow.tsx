"use client";

import ProductThumbnailBase from "@/components/product/thumbnail/layout/ProductThumbnailBase";
import ProductThumbnail from "@/components/product/thumbnail/ProductThumbnail";
import { HOME_CATEGORY_ITEM } from "@/type/home";
import React from "react";
import styled from "styled-components";

const ProductThumbnailRow = ({
  itemId,
  imageSrc,
  imageAlt,
  priorityLoad,
  brand,
  brandId,
  price,
  originalPrice,
  cashbackAmount,
  periods,
  isLiked,
  title,
}: HOME_CATEGORY_ITEM) => {
  const isSoldOut = periods.every((period) => period.isSoldOut);

  return (
    <ProductThumbnailBase itemId={itemId}>
      <>
        <ProductThumbnail.Image
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          priorityLoad={priorityLoad ?? false}
          isSoldOut={isSoldOut}
          isLiked={isLiked}
        />
        <ContentWrapper>
          <ProductThumbnail.Info
            brand={brand}
            brandId={brandId}
            title={title}
          />

          <ProductThumbnail.Price
            price={price}
            originalPrice={originalPrice}
            cashbackAmount={cashbackAmount}
            isSoldOut={isSoldOut}
          />
        </ContentWrapper>
      </>
      <ProductThumbnail.Bottom periods={periods} />
    </ProductThumbnailBase>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ProductThumbnailRow;
