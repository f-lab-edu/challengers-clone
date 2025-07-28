import { useRef } from "react";

export default function useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number = 300
) {
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  const debounceFunc = (...args: Parameters<T>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    const newTimer = setTimeout(() => {
      callback(args)
    }, delay);

    timer.current = newTimer;
  }

  return debounceFunc;
}
