import AutoComplete from "../auto-complete/AutoComplete";
import { useState, useCallback } from "react";
import { AutoCompleteItem, GroupItem } from "@/type/home";
import { AUTO_COMPLETE_ITEMS } from "@/constants/constants";
import useDebouncedCallback from "@/hooks/useDebouncedCallback";
import { useRouter } from "next/navigation";

export default function HomeAutoComplete() {
  const [items, setItems] = useState<AutoCompleteItem[]>([]);
  const router = useRouter();

  const filterItems = useCallback((value: string) => {
    const _filtered = AUTO_COMPLETE_ITEMS.filter(({ name, tags }) => value !== '' && name.startsWith(value) || tags?.some((tag) => tag === value));
    setItems(_filtered);
  }, []);

  const debouncedFilterItems = useDebouncedCallback(filterItems, 300);

  const handleChangeInput = (value: string) => {
    debouncedFilterItems(value);
  }

  const handleItemClick = (item: AutoCompleteItem) => {
    router.push(`/item/${item.id}`);
  }

  return (
    <AutoComplete items={items} onChange={handleChangeInput} onItemClick={handleItemClick} />
  )
}
