import GuideBannerShowButton from "@/components/button/GuideBannerShowButton";
import { GuideBannerProps } from "@/type/guideBanner";
import Image from "next/image";
import styles from "./guide-banner.module.css";

export default function GuideBanner({
  iconSrc,
  iconAlt,
  subTitle,
  title,
  redirectToUrl,
}: GuideBannerProps) {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.textWrapper}>
        <Image
          src={iconSrc}
          alt={`${iconAlt} icon`}
          width={60}
          height={60}
          priority
        />
        <p>
          <span>{subTitle}</span>
          <span>{title}</span>
        </p>
      </div>
      <GuideBannerShowButton redirectToUrl={redirectToUrl} />
    </section>
  );
}
