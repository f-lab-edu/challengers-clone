import useModalRenderer from "@/hooks/useModalRenderer";
import useModalESC from "@/hooks/useModalESC";
import { useModalStack } from "@/hooks/useModalStack";
import { createContext } from "react";
import { ModalComponent, ModalComponentProps, ModalComponentOptions } from "@/type/modal";

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
  const { stack, open, close, resolveCurrent } = useModalStack();

  // ESC 키 처리
  useModalESC({ stack, close });

  // 모달 렌더링 훅 사용
  const { renderModalWithWrappers } = useModalRenderer({ close });

  return (
    <ModalInternalContext.Provider value={{ open, close, resolveCurrent }}>
      {children}
      {
        stack.map(({ Component, props, options }, idx) =>
          renderModalWithWrappers(Component, props, options, idx)
        )
      }
    </ModalInternalContext.Provider >
  )
}
