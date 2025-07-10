import PageTransition from "@/components/page-transition/PageTransition";
import Onboarding from "@/components/onboarding/Onboarding";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.layout}>
      <PageTransition animationType="load">
        <Onboarding />
      </PageTransition>
    </div>
  );
}
