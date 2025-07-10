import PageTransition from "@/components/page-transition/PageTransition";
import Onboarding from "@/components/onboarding/Onboarding";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

type PageProps = {
  searchParams: { menu: string } | Promise<{ menu: string }>;
};

export default async function page({ searchParams }: PageProps) {
  const params = await searchParams;
  const menu = params["menu"] ?? "cosmetics";

  return menu === "cosmetics" ? (
    <div className={styles.layout}>
      <PageTransition animationType="load">
        <Onboarding />
      </PageTransition>
    </div>
  ) : (
    redirect("/home")
  );
}
