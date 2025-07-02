export type HOME_CAROUSEL_ITEM = {
  itemId: string;
  subtitle: string; // 소제목
  title: string; // 메인 제목
  ctaText: string; // CTA 버튼/링크 텍스트 (ex. "바로가기 >")
  imageSrc: string; // 오른쪽 이미지 URL
  imageAlt: string; // 이미지 접근성용 ALT
  href?: string; // CTA 클릭 시 이동할 경로
};

export type HOME_ACTION_ICON = {
  iconSrc: string;
  name: string;
  href: string;
};

export type HOME_CATEGORY_ITEM = {
  itemId: string;
  imageSrc: string; // 상품 이미지
  imageAlt: string; // 상품 이미지 설명
  isLiked: boolean; // 찜하기 여부
  currentCount: number; // 현재 참여 인원
  maxCount: number; // 최대 인원 수
  brand: string; // 브랜드명
  brandId: "musinsa-id" | "olive-young-id" | "11st-id" | "g-market-id"; // 브랜드 id
  startTime: string; // 시작 시간 (ex. "6/27 오후 1시")
  endTime: string; // 종료 시간 (ex. "4시")
  title: string; // 상품명
  price: number; // 현재 가격
  originalPrice: number; // 원래 가격
  cashbackAmount: number; // 페이백 금액
};
