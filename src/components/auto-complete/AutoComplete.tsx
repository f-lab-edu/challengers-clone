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
  onItemClick: (item: AutoCompleteItem) => void;
}

export default function AutoComplete({ items, placeholder, onChange, onItemClick }: AutoCompleteProps) {
  const { value, isOpen, setIsOpen, handleChangeInput, getActiveDescendant } = useAutoCompleteInput({ onChange });
  const { targetRef } = useOutsideClick({ onClickOutsideHandler: () => setIsOpen(false) });
  const { itemRef, listRef, currentKeyboardIndex, handleKeyDown } = useKeyboardListNavigation({ items, onEnterCallback: onItemClick });

  return (
    <Wrapper ref={targetRef}>
      <Input
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls="autocomplete-listbox"
        // screen reader 에서 선택된 아이템을 알 수 있도록 설정
        aria-activedescendant={getActiveDescendant(currentKeyboardIndex, itemRef.current?.id ?? '')}
        name="auto-complete-input"
        value={value}
        onChange={handleChangeInput}
        placeholder={placeholder || "상품 검색"}
        onKeyDown={handleKeyDown}
      />
      {
        isOpen && items.length !== 0 && (
          <ScrollMask>
            <ItemContainer ref={listRef}
              role="listbox"
              id="autocomplete-listbox"
            >
              {items.map(({ id, name, ...rest }, idx) => (
                <ItemWrapper
                  key={id}
                  role="option"
                  id={id}
                  aria-selected={currentKeyboardIndex === idx}
                  $isActive={currentKeyboardIndex === idx}
                  onClick={() => onItemClick({ id, name, ...rest })}
                  ref={(el) => {
                    if (currentKeyboardIndex === idx) {
                      itemRef.current = el;
                    }
                  }}
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
