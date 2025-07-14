"use client";
import type { HOME_CATEGORY_ITEM } from "@/type/home";
import ProductInfo from "@/components/product/thumbnail/ProductThumbnailInfo";
import ProductImage from "@/components/product/thumbnail/ProductThumbnailImage";
import ProductPrice from "@/components/product/thumbnail/ProductThumbnailPrice";
import ProductBottom from "@/components/product/thumbnail/ProductThumbnailBottom";
import ProductThumbnailLayout from "@/components/product/thumbnail/layout/ProductThumbnailLayout";

type ProductThumbnailProps = {
  product: HOME_CATEGORY_ITEM;
};

export default function ProductThumbnail({ product }: ProductThumbnailProps) {
  return <ProductThumbnailLayout {...product} />;
}

ProductThumbnail.Image = ProductImage;
ProductThumbnail.Info = ProductInfo;
ProductThumbnail.Price = ProductPrice;
ProductThumbnail.Bottom = ProductBottom;
