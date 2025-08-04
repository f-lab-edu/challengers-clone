import { useCallback, useState } from "react";
import { ModalComponent, ModalComponentProps, ModalComponentOptions } from "@/type/modal";
import { ModalStackItem } from "@/type/modalStack";

export function useModalStack() {
  const [stack, setStack] = useState<ModalStackItem[]>([]);

  const open = useCallback((Component: ModalComponent, props: ModalComponentProps = {}, options: ModalComponentOptions = {}) => {
    // 기본값 설정
    const defaultOptions: ModalComponentOptions = {
      enableESC: true,
      enableFocusTrap: true,
      enableDimmed: true
    };

    // 사용자 옵션과 기본값 병합
    const mergedOptions = { ...defaultOptions, ...options };

    return new Promise((resolve, reject) => {
      setStack((prev) => [
        ...prev,
        { Component, props, resolve, reject, options: mergedOptions }
      ])
    })
  }, [])

  const close = useCallback((result?: any) => {
    setStack((prev) => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      last.resolve(result);
      return prev.slice(0, -1);
    })
  }, [])

  const resolveCurrent = useCallback((result?: any) => {
    setStack((prev) => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      last.resolve(result);
      return prev; // 모달을 닫지 않고 결과만 반환
    })
  }, [])

  return {
    stack,
    open,
    close,
    resolveCurrent
  };
}