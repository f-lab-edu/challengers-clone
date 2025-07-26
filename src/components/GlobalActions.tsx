'use client';

import { useModalStack } from "@/hooks/useModalStack";
import BottomSheet from "./modal/BottomSheet";
import { useEffect } from "react";
import useGlobalActions from "@/hooks/useGlobalActions";

export default function GlobalActions() {
  const modal = useModalStack();
  const { data } = useGlobalActions();

  const onClose = () => {
    modal.close();
  }

  useEffect(() => {
    if (data?.length) {
      modal.open(BottomSheet, { data, onClose })
    }
  }, [data])

  return null
}
