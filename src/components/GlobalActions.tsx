'use client';

import { useModalContext } from "@/hooks/useModalContext";
import BottomSheet from "./modal/BottomSheet";
import { useEffect } from "react";
import useGlobalActions from "@/hooks/useGlobalActions";

export default function GlobalActions() {
  const modal = useModalContext();
  const { data } = useGlobalActions();

  const onClose = () => {
    modal.close();
  }

  useEffect(() => {
    if (data?.length) {
      modal.open(BottomSheet, { data, onClose }, { animationType: 'fadeIn' })
    }
  }, [data])

  return null
}
