'use client';

import { useModal } from "@/hooks/useModal";
import BottomSheet from "./modal/BottomSheet";
import { useEffect } from "react";

type GlobalActionsProps = {
  needsBottomSheet: boolean;
  bottomSheetData: {};
}

export default function GlobalActions({ needsBottomSheet, bottomSheetData = {} }: GlobalActionsProps) {
  const modal = useModal();

  useEffect(() => {
    modal.open(BottomSheet, bottomSheetData)
  }, [])

  return null
}
