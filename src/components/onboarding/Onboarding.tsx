"use client";

import { MouseEventHandler, useState } from "react";
import OnboardingIntro from "@/components/onboarding/OnboardingIntro";
import OnboardingMain from "./OnboardingMain";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/page-transition/PageTransition";

export default function Onboarding() {
  const [isOnboardingStart, setIsOnboardingStart] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const type = e.currentTarget.dataset.type;
    if (type === "start") setIsFading(true);
    if (type === "prev") router.back();
  };

  const handleAnimationComplete = () => {
    if (isFading) {
      setIsOnboardingStart(true);
      setIsFading(false);
    }
  };

  return (
    <PageTransition
      animationType={isFading ? "fadeOut" : "fadeIn"}
      onAnimationComplete={handleAnimationComplete}
      $key={`${isFading.toString()}`}
    >
      {isOnboardingStart ? (
        <OnboardingMain />
      ) : (
        <OnboardingIntro handleClickStepButton={handleClick} />
      )}
    </PageTransition>
  );
}
