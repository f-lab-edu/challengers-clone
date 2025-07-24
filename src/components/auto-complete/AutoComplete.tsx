'use client'

import { AutoCompleteItem } from "@/type/home";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, KeyboardEventHandler, useEffect, useRef, useState } from "react";
import styled from "styled-components"

type AutoCompleteProps = {
  items: AutoCompleteItem[]
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function AutoComplete({ items, placeholder, onChange }: AutoCompleteProps) {
  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [keyboardIndex, setKeyboardIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setValue(value)
    onChange(value);
  }

  const handleClickDropDown = (id: string) => {
    router.push(`/item/${id}`);
  }

  const handleKeyDown = (e: KeyboardEvent | React.KeyboardEvent) => {
    if (!['Enter', 'ArrowDown', 'ArrowUp'].includes(e.key)) return;

    if (e.key === 'Enter') {
      const selectedItem = items[keyboardIndex];
      router.push(`item/${selectedItem.id}`);
    }

    setKeyboardIndex((prev) => {
      if (e.key === 'ArrowDown') {
        prev += 1;
      } else if (e.key === 'ArrowUp') {
        prev -= 1;
      }

      if (prev >= items.length) {
        prev = 0;
      } else if (prev < 0) {
        prev = items.length - 1;
      }

      return prev;
    })
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, []);

  return (
    <Wrapper ref={containerRef}>
      <Input name="auto-complete-input" value={value} onChange={handleChangeInput} placeholder={placeholder || "상품 검색"} onKeyDown={handleKeyDown} />
      {
        isOpen && items.length !== 0 ? (
          <ItemContainer>
            {items.map(({ id, name }, idx) => (
              <ItemWrapper key={id} onClick={() => handleClickDropDown(id)}
                $isActive={keyboardIndex === idx}
              >
                <span>{name}</span>
              </ItemWrapper>
            ))
            }
          </ItemContainer >
        ) : (<></>)
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 40px;
  background: white;
  margin-bottom: 12px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 4px 12px;
  border: none;
  outline: none;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  color: gray;
  font-size: 14px;
`;

const ItemContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  width: 100%;
  min-height: 300px;
  max-height: 300px;
	outline: none;
	position: absolute;
	top: 52px;
	left: 0;
	z-index: 100;
	background: white;
	box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
`;

const ItemWrapper = styled.li<{ $isActive: boolean }>`
  width: 100%;
	display: flex;
  align-items: center;
  padding: 0 20px 12px;
	flex-direction: column;
  cursor: pointer;
	&:hover {
		background: skyblue;
	}
  background: ${({ $isActive }) => $isActive ? 'skyblue' : ''} 
`;
