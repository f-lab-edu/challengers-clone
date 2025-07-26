import useCloseOnESC from "@/hooks/useCloseOnESC";
import { createContext, useCallback, useEffect, useState } from "react";
import FocusTrap from "@/components/modal/FocusTrap";
import PageTransition from "@/components/page-transition/PageTransition";
import { animationVariants } from "@/constants/transition";

type ModalComponentProps = any;
type ModalComponent = React.ComponentType<ModalComponentProps>;
type ModalComponentOptions = {
  enableESC?: boolean;
  enableFocusTrap?: boolean;
  animationType?: animationType;
}
type animationType = keyof typeof animationVariants | undefined;

type ModalStackItem = {
  Component: ModalComponent;
  props: ModalComponentProps;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
  options: ModalComponentOptions
}

type ModalContextType = {
  open: (Component: ModalComponent, props?: ModalComponentProps, options?: ModalComponentOptions) => Promise<any>;
  close: (result?: any) => void;
  resolveCurrent: (result?: any) => void;
}

export const ModalInternalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [stack, setStack] = useState<ModalStackItem[]>([]);

  const open = useCallback((Component: ModalComponent, props: ModalComponentProps = {}, options: ModalComponentOptions = {}) => {
    return new Promise((resolve, reject) => {
      setStack((prev) => [
        ...prev,
        { Component, props, resolve, reject, options }
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

  // ESC 키 처리 - 현재 최상위 모달이 ESC를 허용하는지 확인
  const handleESC = useCallback(() => {
    if (stack.length > 0) {
      const currentModal = stack[stack.length - 1];
      const enableESC = currentModal.options?.enableESC;

      if (enableESC) {
        close();
      }
    }
  }, [stack, close]);

  useCloseOnESC({ onClose: handleESC });

  return (
    <ModalInternalContext.Provider value={{ open, close, resolveCurrent }}>
      {children}
      {
        stack.map(({ Component, props, options: { enableFocusTrap, animationType } }, idx) => (
          // <PageTransition
          //   animationType="load"
          //   key={idx}
          // >
          <FocusTrap key={idx} isActive={enableFocusTrap}>
            <Component {...props} />
          </FocusTrap>
          // </PageTransition>
        ))
      }
    </ModalInternalContext.Provider>
  )
}
