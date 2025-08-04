import styled from "styled-components";
import { useModalContext } from "@/hooks/useModalContext";

type SelectModalProps = {
  title: string;
  data: any[];
  onItemSelect?: (selectedItem: string) => void;
}

export default function SelectModal({ title, data, onItemSelect }: SelectModalProps) {
  const { resolveCurrent } = useModalContext();
  const handleItemClick = (selectedItem: string) => {
    // onItemSelect 콜백이 있으면 호출
    if (onItemSelect) {
      onItemSelect(selectedItem);
    } else {
      // 기존 방식: 결과 반환하고 모달은 닫히지 않음
      resolveCurrent(selectedItem);
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <ContentWrapper>
        {
          data.map((el) => (
            <Item key={el.value} onClick={() => handleItemClick(el.value)} tabIndex={0}>
              {el.label}
            </Item>
          ))
        }
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
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