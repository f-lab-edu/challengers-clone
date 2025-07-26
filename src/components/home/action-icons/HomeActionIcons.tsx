"use client";

import ScrollableArea from "@/components/ScrollableArea";
import useActionIconModal from "@/hooks/useActionIconModal";
import { HOME_ACTION_ICON } from "@/type/home";
import Image from "next/image";
import styled from "styled-components";

type HomeActionIconsProps = {
  items: HOME_ACTION_ICON[] | undefined;
};

export default function HomeActionIcons({ items }: HomeActionIconsProps) {
  if (items == undefined) return null;

  const { handleOpenModal } = useActionIconModal();

  const handleItemClick = (itemName: string) => {
    handleOpenModal(itemName);
  };

  return (
    <Container>
      <ScrollableArea>
        {items.map((item) => (
          <Item key={item.name} onClick={() => handleItemClick(item.name)}>
            <Image
              src={item.iconSrc}
              width={48}
              height={48}
              alt={`${item.name} icon`}
            />
            <ItemName>{item.name}</ItemName>
          </Item>
        ))}
      </ScrollableArea>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
`;

const Item = styled.li`
  display: flex;
  min-width: 88px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8px 0 0;
  cursor: pointer;
`;

const ItemName = styled.span`
  font-size: 14px;
`;
