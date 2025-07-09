import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/home/action-icons", () => {
    return HttpResponse.json({ name: "민호", role: "개발자" });
  }),

  http.get("/api/home/carousel", () => {
    const data = [
      {
        itemId: "AA11",
        subtitle: "위찌 NEW 신상 출시🔥",
        title: "밋밋한 눈매에 포인트 만들기\n티어드롭 글리터 라이너 2종",
        ctaText: "바로가기 >",
        imageSrc: "/images/home-banner/image1.jpg",
        imageAlt: "위찌 new 신상 아이템 이미지",
        href: "",
      },
      {
        itemId: "AB12",
        subtitle: "이번이 마지막 기회에요.",
        title: "풀무원 카테킨 다이어트 30정\n2개 6,900원 혜택💚",
        ctaText: "바로가기 >",
        imageSrc: "/images/home-banner/image2.jpg",
        imageAlt: "풀무원 카테킨 이미지",
        href: "",
      },
    ];

    return HttpResponse.json(data);
  }),
];
