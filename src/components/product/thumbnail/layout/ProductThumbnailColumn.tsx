import ProductThumbnailBase from "@/components/product/thumbnail/layout/ProductThumbnailBase";
import ProductThumbnail from "@/components/product/thumbnail/ProductThumbnail";

import { HOME_CATEGORY_ITEM } from "@/type/home";
import { ParticipationStatus, TimeText, UserIcon } from "@/constants/product";

const ProductThumbnailColumn = ({
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
  const { currentCount, maxCount, time, isSoldOut } = periods[0];

  return (
    <ProductThumbnailBase itemId={itemId}>
      <>
        <ProductThumbnail.Image
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          priorityLoad={priorityLoad ?? false}
          isSoldOut={isSoldOut}
          isLiked={isLiked}
        >
          <ParticipationStatus $isAbsolute={true}>
            <UserIcon />
            {currentCount}명/{maxCount}명
          </ParticipationStatus>
        </ProductThumbnail.Image>

        <ProductThumbnail.Info brand={brand} brandId={brandId} title={title}>
          <TimeText>{time}</TimeText>
        </ProductThumbnail.Info>

        <ProductThumbnail.Price
          price={price}
          originalPrice={originalPrice}
          cashbackAmount={cashbackAmount}
          isSoldOut={isSoldOut}
        />
      </>
    </ProductThumbnailBase>
  );
};

export default ProductThumbnailColumn;
