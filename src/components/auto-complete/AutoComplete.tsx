'use client'

import useAutoCompleteInput from "@/hooks/useAutoCompleteInput";
import useKeyboardListNavigation from "@/hooks/useKeyboardListNavigation";
import useNavigate from "@/hooks/useNavigate";
import useOutsideClick from "@/hooks/useOnClickOutside";
import { AutoCompleteItem } from "@/type/home";
import styled from "styled-components"

type AutoCompleteProps = {
  items: AutoCompleteItem[]
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function AutoComplete({ items, placeholder, onChange }: AutoCompleteProps) {
  const { routeTo } = useNavigate();
  const { value, isOpen, setIsOpen, handleChangeInput } = useAutoCompleteInput({ onChange });
  const { targetRef } = useOutsideClick({ onClickOutsideHandler: () => setIsOpen(false) });
  const { itemRef, listRef, currentKeyboardIndex, handleKeyDown } = useKeyboardListNavigation(items.length);

  return (
    <Wrapper ref={targetRef}>
      <Input
        name="auto-complete-input"
        value={value}
        onChange={handleChangeInput}
        placeholder={placeholder || "상품 검색"}
        onKeyDown={(e) => handleKeyDown(e, itemRef.current?.id ?? '')}
      />
      {
        isOpen && items.length !== 0 && (
          <ScrollMask>
            <ItemContainer ref={listRef}>
              {items.map(({ id, name }, idx) => (
                <ItemWrapper key={id} onClick={() => routeTo(`/item/${id}`)}
                  $isActive={currentKeyboardIndex === idx}
                  ref={(el) => {
                    if (currentKeyboardIndex === idx) {
                      itemRef.current = el;
                    }
                  }}
                  id={id}
                >
                  <span>{name}</span>
                </ItemWrapper>
              ))
              }
            </ItemContainer >
          </ScrollMask>
        )
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

const ScrollMask = styled.div`
  display: flex;
  overflow: hidden;
`

const ItemContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
  width: 100%;
  min-height: 300px;
  max-height: 300px;
  overflow-y: scroll;
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
