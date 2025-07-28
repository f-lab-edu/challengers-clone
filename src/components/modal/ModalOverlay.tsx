import React, { MouseEventHandler } from 'react'
import styled, { css } from 'styled-components';

type DimmedProps = {
  children: React.ReactNode;
  onClose: () => void;
}
export default function ModalOverlay({ children, onClose }: DimmedProps) {
  // 다른 PR에서 외부 클릭 시 onClose callback 실행하는 훅 만들어 놓음
  // TODO 추후 해당 훅 적용하여 변경할 것.
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("e.target: ", e.target, ", currentTarget: ", e.currentTarget);

    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <Wrapper
      onClick={handleClick}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
`;