import HomeActionIcons from "@/components/home/action-icons/HomeActionIcons";
import { HOME_ACTION_ICONS as MOCK_ACTION_ICONS } from "@/data/data";
import type { HOME_ACTION_ICONS } from "@/type/home";

const fetchHomeActionIcons = async (): Promise<HOME_ACTION_ICONS[]> => {
  const data = await fetch("/api/home/action-icons", {
    next: {
      revalidate: 60 * 60 * 24 * 7,
    },
  });

  return data.json();
};

export default function HomeActionIconsContainer() {
  const data = MOCK_ACTION_ICONS;

  console.log("ACtion data: ", data);

  // TODO
  // API call
  // const { data } = useGetApi<HOME_ACTION_ICONS[]>({
  //   queryKey: ["/api/home/action-icons"],
  //   queryFn: fetchHomeActionIcons,
  // });

  return <HomeActionIcons items={data} />;
}
