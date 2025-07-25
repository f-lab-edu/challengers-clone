import { useEffect, useRef, useState } from "react";

export default function useKeyboardListNavigation(itemCount: number) {
  const [currentKeyboardIndex, setCurrentKeyboardIndex] = useState(-1);
  const itemRef = useRef<HTMLLIElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleKeyDown = (e: KeyboardEvent | React.KeyboardEvent, onEnterRouteTo: string) => {
    if (!['Enter', 'ArrowDown', 'ArrowUp'].includes(e.key)) return;

    if (e.key === 'Enter') {
      router.push(`item/${onEnterRouteTo}`);
    }

    setCurrentKeyboardIndex((prev) => {
      if (e.key === 'ArrowDown') {
        prev += 1;
      } else if (e.key === 'ArrowUp') {
        prev -= 1;
      }

      if (prev >= itemCount) {
        prev = 0;
      } else if (prev < 0) {
        prev = itemCount - 1;
      }

      return prev;
    })
  }

  useEffect(() => {
    if (itemRef.current && listRef.current) {
      const item = itemRef.current;
      const list = listRef.current;
      // 선택된 아이템의 윗부분이 ul의 맨 위에서부터 얼마나 떨어져 있는지
      const itemTop = item.offsetTop;
      // 선택된 아이템의 아랫부분 위치
      const itemBottom = itemTop + item.offsetHeight;
      // 현재 ul이 스크롤된 위치(스크롤바의 최상단 위치)
      const listTop = list.scrollTop;
      // ul의 보이는 영역의 맨 아래 위치
      const listBottom = listTop + list.clientHeight;

      // 아이템이 ul의 보이는 영역 위에 있을 때
      if (itemTop < listTop) {
        // 아이템이 보이도록 ul의 스크롤을 아이템의 윗부분으로 맞춤
        list.scrollTop = itemTop;
      }
      // 아이템이 ul의 보이는 영역 아래에 있을 때
      else if (itemBottom > listBottom) {
        // 아이템이 보이도록 ul의 스크롤을 아이템의 아랫부분이 ul의 맨 아래에 오도록 맞춤
        list.scrollTop = itemBottom - list.clientHeight;
      }
    }

  }, [currentKeyboardIndex])

  return { currentKeyboardIndex, itemRef, listRef, handleKeyDown }
}
