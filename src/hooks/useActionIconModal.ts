import SelectModal from "@/components/modal/SelectModal";
import { useModalStack } from "./useModalStack";
import { HOME_ACTION_ICON_MODAL_ITEMS } from "@/data/data";
import ConfirmModal from "@/components/modal/ConfirmModal";
import InputModal from "@/components/modal/InputModal";

export default function useActionIconModal() {
  const modal = useModalStack();

  const handleOpenModal = async (title: string) => {
    const selectedItem = await modal.open(SelectModal, {
      title,
      data: HOME_ACTION_ICON_MODAL_ITEMS
    });

    if (selectedItem) {
      const confirmed = await modal.open(ConfirmModal, {
        title: '개인 정보 인증 필요',
        message: '해당 메뉴에 접근하기 위해 개인정보가 필요합니다.\n입력창으로 이동하시겠습니까?',
        onCancel: modal.close,
        onConfirm: () => modal.close(true)
      })

      if (confirmed === true) {
        const personalInfo = await modal.open(InputModal, {
          title: '개인 정보 입력',
          onCancel: modal.close,
          onConfirm: (value: string) => modal.close(value)
        })

        if (personalInfo) {

        }
      }
    }

    return selectedItem;
  }

  return { handleOpenModal }
}
