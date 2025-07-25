import { useEffect } from "react";

type UseCloseOnESCProps = {
  enabled: boolean;
  onClose: () => void;
}

export default function useCloseOnESC({ enabled, onClose }: UseCloseOnESCProps) {

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown) }
  }, [enabled, onClose])
  return {}
}
