"use client";

import ScrollableArea from "@/components/ScrollableArea";
import { HOME_ACTION_ICONS } from "@/type/home";
import Image from "next/image";
import styled from "styled-components";

type HomeActionIconsProps = {
  items: HOME_ACTION_ICONS[] | undefined;
};

export default function HomeActionIcons({ items }: HomeActionIconsProps) {
  if (items == undefined) return <></>;

  return (
    <Container>
      <ScrollableArea>
        {items.map((item) => (
          <Item key={item.name}>
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
`;

const ItemName = styled.span`
  font-size: 14px;
`;
