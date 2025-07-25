import { ModalInternalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

export function useModal() {
  const context = useContext(ModalInternalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}