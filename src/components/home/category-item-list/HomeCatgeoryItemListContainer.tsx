import HomeCatgeoryItemList from "@/components/home/category-item-list/HomeCatgeoryItemList";
import { HOME_CATEGORY_ITEMS } from "@/data/data";

export default function HomeCatgeoryItemListContainer() {
  /**
   * TODO
   * API Call
   */
  const data = HOME_CATEGORY_ITEMS;

  return <HomeCatgeoryItemList items={data} />;
}
