import PageTransition from "@/components/page-transition/PageTransition";
import Onboarding from "@/components/onboarding/Onboarding";

export default function page() {
  return (
    <PageTransition>
      <Onboarding />
    </PageTransition>
  );
}
