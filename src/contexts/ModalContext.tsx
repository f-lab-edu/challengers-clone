import useCloseOnESC from "@/hooks/useCloseOnESC";
import { createContext, useCallback, useEffect, useState } from "react";
import FocusTrap from "@/components/modal/FocusTrap";

type ModalComponentProps = any;
type ModalComponent = React.ComponentType<ModalComponentProps>;

type ModalStackItem = {
  Component: ModalComponent;
  props: ModalComponentProps;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
  enableESC?: boolean;
  enableFocusTrap?: boolean;
}

type ModalContextType = {
  open: (Component: ModalComponent, props?: ModalComponentProps, enableESC?: boolean, enableFocusTrap?: boolean) => Promise<any>;
  close: (result?: any) => void;
  resolveCurrent: (result?: any) => void;
}

export const ModalInternalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [stack, setStack] = useState<ModalStackItem[]>([]);

  const open = useCallback((Component: ModalComponent, props: ModalComponentProps = {}, enableESC: boolean = true, enableFocusTrap: boolean = true) => {
    return new Promise((resolve, reject) => {
      setStack((prev) => [
        ...prev,
        { Component, props, resolve, reject, enableESC, enableFocusTrap }
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
      if (currentModal.enableESC) {
        close();
      }
    }
  }, [stack, close]);

  useCloseOnESC({ onClose: handleESC });

  return (
    <ModalInternalContext.Provider value={{ open, close, resolveCurrent }}>
      {children}
      {
        stack.map(({ Component, props, enableFocusTrap }, idx) => (
          <FocusTrap key={idx} isActive={enableFocusTrap}>
            <Component {...props} />
          </FocusTrap>
        ))
      }
    </ModalInternalContext.Provider>
  )
}
