import styled from "styled-components";

type AlertModalProps = {
  title?: string;
  message: string;
  onConfirm: () => void;
}

export default function AlertModal({ title = "알림", message, onConfirm }: AlertModalProps) {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <MessageWrapper>
        <Message>{message}</Message>
      </MessageWrapper>
      <ButtonWrapper>
        <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 320px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const Message = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  text-align: center;
  line-height: 1.5;
  white-space: pre-line;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ConfirmButton = styled.button`
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
