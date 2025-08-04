import { ModalInternalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

export function useModalContext() {
  const context = useContext(ModalInternalContext);

  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }

  return context;
} 