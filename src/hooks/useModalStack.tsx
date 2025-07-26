import { ModalInternalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

export function useModalStack() {
  const context = useContext(ModalInternalContext);

  if (!context) {
    throw new Error('useModalStack must be used within a ModalProvider');
  }

  return context;
}