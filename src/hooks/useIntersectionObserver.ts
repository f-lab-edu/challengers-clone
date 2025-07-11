import { useCallback, useRef } from "react";

type UseIntersectionObserverProps = {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  threshold?: number;
};
export default function useIntersectionObserver({
  fetchNextPage,
  hasNextPage,
  threshold = 0.5,
}: UseIntersectionObserverProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setTargetRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (node) {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && hasNextPage) {
              fetchNextPage();
            }
          },
          { threshold }
        );

        observerRef.current.observe(node);
      }
    },
    [threshold, hasNextPage, fetchNextPage]
  );

  return { targetRef: setTargetRef };
}
