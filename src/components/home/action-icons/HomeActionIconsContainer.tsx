import HomeActionIcons from "@/components/home/action-icons/HomeActionIcons";
import { HOME_ACTION_ICONS } from "@/data/data";
import { fetchHomeActionIcons } from "@/remotes/home";

export default async function HomeActionIconsContainer() {
  const data = HOME_ACTION_ICONS;
  // const data = await fetchHomeActionIcons();

  return <HomeActionIcons items={data} />;
}
