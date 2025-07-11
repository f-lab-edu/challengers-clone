import { FaRegUser } from "react-icons/fa6";
import styled, { css } from "styled-components";

export const ParticipationStatus = styled.div<{ $isAbsolute: boolean }>`
  padding: 4px;
  border-radius: 2px;
  font-size: 12px;
  color: gray;
  background: #ececec;
  ${({ $isAbsolute }) =>
    $isAbsolute &&
    css`
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: white;
      background: rgba(0, 0, 0, 0.6);
    `}
  min-width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const UserIcon = styled(FaRegUser)`
  margin-right: 4px;
`;

export const TimeText = styled.span`
  margin-top: 4px;
  font-size: 13px;
  color: #888;
`;
