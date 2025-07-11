"use client";
import type { HOME_CATEGORY_ITEM } from "@/type/home";
import ProductInfo from "@/components/product/thumbnail/ProductThumbnailInfo";
import ProductImage from "@/components/product/thumbnail/ProductThumbnailImage";
import ProductPrice from "@/components/product/thumbnail/ProductThumbnailPrice";
import ProductBottom from "@/components/product/thumbnail/ProductThumbnailBottom";
import ProductThumbnailLayout from "@/components/product/thumbnail/layout/ProductThumbnailLayout";

export default function ProductThumbnail(props: HOME_CATEGORY_ITEM) {
  return <ProductThumbnailLayout {...props} />;
}

ProductThumbnail.Image = ProductImage;
ProductThumbnail.Info = ProductInfo;
ProductThumbnail.Price = ProductPrice;
ProductThumbnail.Bottom = ProductBottom;
