import { useEffect, useRef } from "react";

export default function useOnClickOutside(onClickOutsideHandler: (...args: any[]) => void) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetRef.current == undefined) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (targetRef.current && !targetRef.current.contains(e.target as Node)) {
        onClickOutsideHandler();
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  }, []);

  return { targetRef }
}
