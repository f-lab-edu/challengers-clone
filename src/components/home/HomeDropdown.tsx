import Dropdown from "../dropdown/Dropdown";

const HomeDropDownMenus = [
	{
		label: '실구매가 낮은 순',
		value: 'price_asc'
	},
	{
		label: '추천순',
		value: 'recommend'
	},
]

export default function HomeDropdown() {
	return (
		<Dropdown menus={HomeDropDownMenus} />
	)
}
