export type HOME_CAROUSEL_ITEM = {
  itemId: string;
  subtitle: string; // 소제목
  title: string; // 메인 제목
  ctaText: string; // CTA 버튼/링크 텍스트 (ex. "바로가기 >")
  imageSrc: string; // 오른쪽 이미지 URL
  imageAlt: string; // 이미지 접근성용 ALT
  href?: string; // CTA 클릭 시 이동할 경로
};
