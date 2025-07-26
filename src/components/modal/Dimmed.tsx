import React, { MouseEventHandler } from 'react'
import styled, { css } from 'styled-components';

type DimmedProps = {
  children: React.ReactNode;
  onClose: () => void;
  forBottomSheet?: boolean;
}
export default function Dimmed({ children, onClose, forBottomSheet = false }: DimmedProps) {
  // 다른 PR에서 외부 클릭 시 onClose callback 실행하는 훅 만들어 놓음
  // TODO 추후 해당 훅 적용하여 변경할 것.
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <Wrapper
      $forBottomSheet={forBottomSheet}
      onClick={handleClick}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $forBottomSheet: boolean }>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  
 ${({ $forBottomSheet }) =>
    $forBottomSheet ?
      css`
        flex-direction: column-reverse;
      `: `
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `};
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 30;
`;