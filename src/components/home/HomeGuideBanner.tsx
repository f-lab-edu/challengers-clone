import GuideBanner from "@/components/guide-banner/GuideBanner";
import { GuideBannerProps } from "@/type/guideBanner";

export default function HomeGuideBanner() {
  const props: GuideBannerProps = {
    iconSrc: "/images/guide-banner/cosmetics.jpg",
    iconAlt: "화장품",
    subTitle: "챌린저스 쇼핑이 처음인가요?",
    title: "화장품 싸게 사는법",
    redirectToUrl: "/onboarding/cosmetics",
  };

  return <GuideBanner {...props} />;
}

export const dynamic = "force-static";
