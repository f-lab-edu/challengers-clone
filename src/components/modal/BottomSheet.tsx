'use client';

import styled from "styled-components";

type BottomSheetProps = {

}

export default function BottomSheet({ }: BottomSheetProps) {
  return (
    <Dimmed>
      <div style={{ width: "100%", height: "350px", background: 'white' }}> test </div>
    </Dimmed>
  )
}


const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
`;