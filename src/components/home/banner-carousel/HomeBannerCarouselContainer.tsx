import HomeBannerCarousel from "@/components/home/banner-carousel/HomeBannerCarousel";
import { HOME_CAROUSEL_ITEMS } from "@/data/data";
import { HOME_CAROUSEL_ITEM } from "@/type/home";

const fetchHomeBannerCarouselData = async (): Promise<HOME_CAROUSEL_ITEM[]> => {
  const data = await fetch("/api/home/carousel", {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  return data.json();
};

export default function HomeBannerCarouselContainer() {
  const data = HOME_CAROUSEL_ITEMS;
  console.log("Carousel Data: ", data);

  // TODO
  // API Call
  // const { data } = useGetApi<HOME_CAROUSEL_ITEM[]>({
  //   queryKey: ["/home/carousel"],
  //   queryFn: fetchHomeBannerCarouselData,
  // });

  return <HomeBannerCarousel items={data} />;
}
