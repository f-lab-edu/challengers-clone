import HomeCategoryItemList from "@/components/home/category-item-list/HomeCategoryItemList";
import { HOME_CATEGORY_ITEMS } from "@/data/data";

export default function HomeCategoryItemListContainer() {
  /**
   * TODO
   * API Call
   */
  const data = HOME_CATEGORY_ITEMS;

  return <HomeCategoryItemList items={data} />;
}
