import type { HOME_CATEGORY_ITEM } from "@/type/home";

import ProductThumbnailRow from "@/components/product/thumbnail/layout/ProductThumbnailRow";
import ProductThumbnailColumn from "@/components/product/thumbnail/layout/ProductThumbnailColumn";

const ProductThumbnailLayout = (props: HOME_CATEGORY_ITEM) => {
  if (props.periods.length > 1) {
    return <ProductThumbnailRow {...props} />;
  }

  return <ProductThumbnailColumn {...props} />;
};

export default ProductThumbnailLayout;
