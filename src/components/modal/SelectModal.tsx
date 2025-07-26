import styled from "styled-components";
import Dimmed from "./Dimmed";
import { useModalStack } from "@/hooks/useModalStack";

type SelectModalProps = {
  title: string;
  data: any[];
}

export default function SelectModal({ title, data }: SelectModalProps) {
  const { close, resolveCurrent } = useModalStack();
  const handleItemClick = (selectedItem: string) => {
    resolveCurrent(selectedItem);
  };

  return (
    <Dimmed onClose={close}>
      <Wrapper>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <ContentWrapper>
          {
            data.map((el) => (
              <Item key={el.value} onClick={() => handleItemClick(el.value)}>
                {el.label}
              </Item>
            ))
          }
        </ContentWrapper>
      </Wrapper>
    </Dimmed>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fit-content;
  position: absolute;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const ContentWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

const Item = styled.li`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;

  &:hover {
    background-color: #f5f5f5;
    border-color: #ccc;
  }
`; 