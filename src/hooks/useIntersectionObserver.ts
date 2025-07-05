import { useEffect } from "react";

type UseIntersectionObserverProps = {
  targetRef: React.RefObject<HTMLElement | null>;
  onIntersect: () => void;
  threshold?: number;
};
export default function useIntersectionObserver({
  targetRef,
  onIntersect,
  threshold = 0.5,
}: UseIntersectionObserverProps) {
  useEffect(() => {
    if (targetRef.current == null) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      {
        threshold,
      }
    );

    if (targetRef.current != null) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [targetRef, threshold, onIntersect]);
}
