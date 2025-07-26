import SelectModal from "@/components/modal/SelectModal";
import { useModal } from "./useModal";
import { HOME_ACTION_ICON_MODAL_ITEMS } from "@/data/data";

export default function useActionIconModal() {
  const modal = useModal();

  const handleOpenModal = async (title: string) => {
    const selectedItem = await modal.open(SelectModal, {
      title,
      data: HOME_ACTION_ICON_MODAL_ITEMS
    });

    if (selectedItem) {
      console.log('Selected item:', selectedItem);

    }

    return selectedItem;
  }

  return { handleOpenModal }
}
