import AutoComplete from "../auto-complete/AutoComplete";
import { useState, useCallback } from "react";
import { AutoCompleteItem, GroupItem } from "@/type/home";
import { AUTO_COMPLETE_ITEMS } from "@/constants/constants";
import useDebouncedCallback from "@/hooks/useDebouncedCallback";

export default function HomeAutoComplete() {
  const [items, setItems] = useState<AutoCompleteItem[]>([]);

  const filterItems = useCallback((value: string) => {
    const _filtered = AUTO_COMPLETE_ITEMS.filter(({ name, tags }) => value !== '' && name.startsWith(value) || tags?.some((tag) => tag === value));
    setItems(_filtered);
  }, []);

  const debouncedFilterItems = useDebouncedCallback(filterItems, 300);

  const handleChangeInput = (value: string) => {
    debouncedFilterItems(value);
  }

  return (
    <AutoComplete items={items} onChange={handleChangeInput} />
  )
}
