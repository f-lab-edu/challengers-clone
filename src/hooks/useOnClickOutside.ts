import { useEffect, useRef } from "react";

type UseOnClickOutsideProps = {
  onClickOutsideHandler: (...args: any[]) => void
}

export default function useOnClickOutside({ onClickOutsideHandler }: UseOnClickOutsideProps) {
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
