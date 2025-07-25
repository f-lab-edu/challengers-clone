'use client';

import { useModal } from "@/hooks/useModal";
import BottomSheet from "./modal/BottomSheet";
import { useEffect } from "react";
import useGlobalActions from "@/hooks/useGlobalActions";

export default function GlobalActions() {
  const modal = useModal();
  const { data } = useGlobalActions();

  useEffect(() => {
    if (data?.length) {
      modal.open(BottomSheet, { data })
    }
  }, [data])

  return null
}
