import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";

import { GoHomeFill } from "react-icons/go";
import { MdAutoGraph } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { AutoCompleteItem } from "@/type/home";
const DEFAULT_SIZE = 24;

export const GlobalMenus = {
  "/home": {
    title: "Challengers",
    firstIcon: <IoSearch size={DEFAULT_SIZE} />,
    secondIcon: <FiHeart size={DEFAULT_SIZE} />,
  },
  "/challenge": {
    title: "챌린지",
    firstIcon: <IoSearch size={DEFAULT_SIZE} />,
    secondIcon: <FiHeart size={DEFAULT_SIZE} />,
  },
  "/certification": {
    title: "챌린지 인증",
    firstIcon: "",
    secondIcon: "",
  },
  "/mypage": {
    title: "마이페이지",
    firstIcon: <FaRegBell size={DEFAULT_SIZE} />,
    secondIcon: <FiSettings size={DEFAULT_SIZE} />,
  },
};

export const BottomMenus = [
  {
    url: "/home",
    title: "홈",
    icon: <GoHomeFill size={DEFAULT_SIZE} />,
  },
  {
    url: "/challenge",
    title: "챌린지",
    icon: <MdAutoGraph size={DEFAULT_SIZE} />,
  },
  {
    url: "/certification",
    title: "인증",
    icon: <MdOutlineCameraAlt size={DEFAULT_SIZE} />,
  },
  {
    url: "/mypage",
    title: "마이페이지",
    icon: <FaRegUser size={DEFAULT_SIZE} />,
  },
];

export const HOME_CATEGORIES = [
  {
    name: "전체",
    enName: "all",
    iconSrc: "/images/home-categories/all.png",
  },
  {
    name: "오픈 예정",
    enName: "coming-soon",
    iconSrc: "/images/home-categories/coming-soon.png",
  },
  {
    name: "뷰티",
    enName: "beauty",
    iconSrc: "/images/guide-banner/cosmetics.jpg",
  },
  {
    name: "푸드/헬스",
    enName: "food-health",
    iconSrc: "/images/home-categories/f&h.png",
  },
  {
    name: "라이프",
    enName: "life",
    iconSrc: "/images/home-categories/life.png",
  },
] as const;

export const LIMIT = 10;

export const AUTO_COMPLETE_ITEMS: AutoCompleteItem[] = [
  {
    id: 'item-0',
    name: '비타민D 영양제',
    category: '푸드/헬스',
    tags: ['스킨케어', '광채', '영양']
  },
  {
    id: 'item-1',
    name: '비타민C 세럼',
    category: '뷰티',
    tags: ['스킨케어', '광채', '영양']
  },
  {
    id: 'item-2',
    name: '비건 단백질 쉐이크',
    category: '푸드/헬스',
    tags: ['단백질', '건강식품', '비건']
  },
  {
    id: 'item-3',
    name: '비누꽃 선물세트',
    category: '라이프',
    tags: ['선물', '향기', '장식']
  },
  {
    id: 'item-4',
    name: '비비크림',
    category: '뷰티',
    tags: ['화장품', '피부톤', '베이스']
  },
  {
    id: 'item-5',
    name: '비오는 날 우산 특가',
    category: '오픈 예정',
    tags: ['우산', '장마', '출시예정']
  },
  {
    id: 'item-6',
    name: '클렌징 워터',
    category: '뷰티',
    tags: ['클렌저', '세안', '피부']
  },
  {
    id: 'item-7',
    name: '단백질바 초코맛',
    category: '푸드/헬스',
    tags: ['단백질', '헬스간식', '에너지']
  },
  {
    id: 'item-8',
    name: '우드 인센스 홀더',
    category: '라이프',
    tags: ['인테리어', '향', '우드소품']
  },
  {
    id: 'item-9',
    name: '토너패드 세트',
    category: '뷰티',
    tags: ['스킨케어', '피부결', '각질제거']
  },
  {
    id: 'item-10',
    name: '건강한 하루 견과',
    category: '푸드/헬스',
    tags: ['건강', '간식', '영양']
  },
  {
    id: 'item-11',
    name: '세면타월 3종 세트',
    category: '라이프',
    tags: ['욕실용품', '수건', '선물']
  },
  {
    id: 'item-12',
    name: '비타민 샴푸',
    category: '뷰티',
    tags: ['두피케어', '탈모', '비타민']
  },
  {
    id: 'item-13',
    name: '비상용 구급 키트',
    category: '라이프',
    tags: ['응급처치', '구급상자', '여행용']
  },
  {
    id: 'item-14',
    name: '비건 화장품 세트',
    category: '뷰티',
    tags: ['비건', '친환경', '스킨케어']
  },
  {
    id: 'item-15',
    name: '비접촉 체온계',
    category: '푸드/헬스',
    tags: ['건강', '체온', '코로나']
  },
  {
    id: 'item-16',
    name: '비타민 젤리',
    category: '푸드/헬스',
    tags: ['간식', '영양', '젤리']
  },
  {
    id: 'item-17',
    name: '비누 디퓨저',
    category: '라이프',
    tags: ['향기', '디퓨저', '장식']
  },
  {
    id: 'item-18',
    name: '비치타월 대형',
    category: '라이프',
    tags: ['여름', '수건', '비치']
  },
  {
    id: 'item-19',
    name: '비건 에너지바',
    category: '푸드/헬스',
    tags: ['비건', '단백질', '헬스']
  },
  {
    id: 'item-20',
    name: '비타민 워터',
    category: '푸드/헬스',
    tags: ['음료', '건강', '수분보충']
  },
  {
    id: 'item-21',
    name: '비염 스프레이',
    category: '푸드/헬스',
    tags: ['코막힘', '알레르기', '건강']
  },
  {
    id: 'item-22',
    name: '비타민C 세럼',
    category: '뷰티',
    tags: ['항산화', '피부미백']
  },
  {
    id: 'item-23',
    name: '비타민B 컴플렉스',
    category: '푸드/헬스',
    tags: ['피로회복', '에너지']
  },
  {
    id: 'item-24',
    name: '비타민D 스프레이',
    category: '푸드/헬스',
    tags: ['면역력', '햇빛대체']
  },
  {
    id: 'item-25',
    name: '비타민C 마스크팩',
    category: '뷰티',
    tags: ['스킨케어', '광채']
  },
  {
    id: 'item-26',
    name: '비타민 오일',
    category: '뷰티',
    tags: ['보습', '윤기']
  },
  {
    id: 'item-27',
    name: '비타민 츄어블',
    category: '푸드/헬스',
    tags: ['간편섭취', '영양제']
  },
  {
    id: 'item-28',
    name: '비타민 구미',
    category: '푸드/헬스',
    tags: ['젤리형', '맛있는 비타민']
  },
  {
    id: 'item-29',
    name: '비타민 스틱',
    category: '푸드/헬스',
    tags: ['휴대용', '비타민']
  },
  {
    id: 'item-30',
    name: '비타민 수분크림',
    category: '뷰티',
    tags: ['보습', '영양']
  },
  {
    id: 'item-31',
    name: '비타민 파우더',
    category: '푸드/헬스',
    tags: ['물에 타먹는', '피로회복']
  }
];


export const DROP_DOWN_ITEMS = [
  {
    group: '기본',
    items: [{
      label: '추천순',
      value: 'recommend'
    }, {
      label: '실구매가 낮은 순',
      value: 'price_asc'
    }]
  }
]
export const DEFAULT_CATEGORY = 'all'
