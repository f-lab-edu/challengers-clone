import useCloseOnESC from "@/hooks/useCloseOnESC";
import { createContext, useCallback, useEffect, useState } from "react";

type ModalComponentProps = any;
type ModalComponent = React.ComponentType<ModalComponentProps>;

type ModalStackItem = {
  Component: ModalComponent;
  props: ModalComponentProps;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
}

type ModalContextType = {
  open: (Component: ModalComponent, props?: ModalComponentProps) => Promise<any>;
  close: (result?: any) => void;
  resolveCurrent: (result?: any) => void;
}

export const ModalInternalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [stack, setStack] = useState<ModalStackItem[]>([]);

  const open = useCallback((Component: ModalComponent, props: ModalComponentProps = {}) => {
    return new Promise((resolve, reject) => {
      setStack((prev) => [
        ...prev,
        { Component, props, resolve, reject }
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

  useCloseOnESC({ enabled: true, onClose: close });

  return (
    <ModalInternalContext.Provider value={{ open, close, resolveCurrent }}>
      {children}
      {
        stack.map(({ Component, props }, idx) => (
          <Component key={idx} {...props} />
        ))
      }
    </ModalInternalContext.Provider>
  )
}
