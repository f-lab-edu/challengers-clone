import PageTransition from "@/components/page-transition/PageTransition";
import Onboarding from "@/components/onboarding/Onboarding";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

type PageProps = {
  params: { menu: string } | Promise<{ menu: string }>;
};

export default async function page({ params }: PageProps) {
  const { menu } = await params;

  if (menu !== "cosmetics") {
    redirect("/home");
  }

  return (
    <div className={styles.layout}>
      <PageTransition animationType="load">
        <Onboarding />
      </PageTransition>
    </div>
  );
}

export const generateStaticParams = async () => {
  return [{ menu: "cosmetics" }];
};
