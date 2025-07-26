import { useEffect } from "react";

type UseCloseOnESCProps = {
  onClose: () => void;
}

export default function useCloseOnESC({ onClose }: UseCloseOnESCProps) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown) }
  }, [onClose])
  return {}
}
