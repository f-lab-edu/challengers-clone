import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface FocusTrapProps {
  children: React.ReactNode;
  isActive?: boolean;
}

export default function FocusTrap({ children, isActive = true }: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // 현재 활성화된 요소 저장
    previousActiveElement.current = document.activeElement as HTMLElement;

    // 포커스 가능한 요소들 찾기
    const getFocusableElements = () => {
      if (!containerRef.current) return [];

      return Array.from(
        containerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
        )
      ).filter((el) => {
        const element = el as HTMLElement;
        return !(element as HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).disabled && element.offsetParent !== null;
      }) as HTMLElement[];
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      event.preventDefault();

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);

      if (event.shiftKey) {
        if (currentIndex <= 0) {
          // 첫 번째 요소이거나 포커스된 요소가 없으면 마지막 요소로
          focusableElements[focusableElements.length - 1].focus();
        } else {
          // 이전 요소로
          focusableElements[currentIndex - 1].focus();
        }
      } else {
        // Tab: 앞으로 이동
        if (currentIndex === -1 || currentIndex >= focusableElements.length - 1) {
          // 마지막 요소이거나 포커스된 요소가 없으면 첫 번째 요소로
          focusableElements[0].focus();
        } else {
          // 다음 요소로
          focusableElements[currentIndex + 1].focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      // 모달이 닫힐 때 이전 활성 요소로 포커스 복원
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isActive]);

  return (
    <Wrapper ref={containerRef}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`