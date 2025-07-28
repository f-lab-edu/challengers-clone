import { useCallback, useEffect } from "react";
import { ModalStackItem } from "@/type/modalStack";

type UseModalESCProps = {
  stack: ModalStackItem[];
  close: (result?: any) => void;
};

export default function useModalESC({ stack, close }: UseModalESCProps) {

  const handleESC = useCallback(() => {
    if (stack.length > 0) {
      const currentModal = stack[stack.length - 1];
      const enableESC = currentModal.options?.enableESC;

      if (enableESC) {
        close();
      }
    }
  }, [stack, close]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleESC()
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown) }
  }, [handleESC])

} 