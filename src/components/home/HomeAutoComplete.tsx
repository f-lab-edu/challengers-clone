import AutoComplete from "../auto-complete/AutoComplete";
import { useState } from "react";
import { AutoCompleteItem, GroupItem } from "@/type/home";
import { AUTO_COMPLETE_ITEMS } from "@/constants/constants";

export default function HomeAutoComplete() {
  const [items, setItems] = useState<AutoCompleteItem[]>([]);

  const handleChangeInput = (value: string) => {
    const _filtered = AUTO_COMPLETE_ITEMS.filter(({ name, tags }) => value !== '' && name.startsWith(value) || tags?.some((tag) => tag === value));
    setItems(_filtered);
  }

  return (
    <AutoComplete items={items} onChange={handleChangeInput} />
  )
}
