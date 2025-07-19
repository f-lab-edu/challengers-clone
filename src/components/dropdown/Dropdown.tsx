'use client'

import { useState } from "react"
import styled from "styled-components"

type DropdownProps = {
	menus: {
		label: string
		value: string
	}[]
	onChange: (value: string) => void
}

export default function Dropdown({ menus, onChange }: DropdownProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [activeMenu, setActiveMenu] = useState<string>('')


	const handleClickDropDown = () => {
		setIsOpen(true)
	}

	const handleChangeDropDown = (value: string) => {
		onChange(value)
		setActiveMenu(value);
	}

	const renderItem = () => {
		if (activeMenu) {
			return (
				<DropdownItem>
					{activeMenu}
				</DropdownItem>
			)
		}

		if (!isOpen) {
			return (
				<DropdownItem>
					{menus?.[0].label}
				</DropdownItem>
			)
		}
	}

	return (
		<Wrapper onClick={handleClickDropDown}
			onChange={handleClickDropDownItem}
		>
			{renderItem()}
			{isOpen && (
				menus.map((menu) => (
					<DropdownItem key={menu.value} value={menu.value} >
						{menu.label}
					</DropdownItem>
				))
			)}
		</Wrapper>
	)
}

const Wrapper = styled.select`
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 200px;
				height: 32px;
				position: relative;
				`;

const DropdownItem = styled.option`
	display: flex;
	align-items: center;
`