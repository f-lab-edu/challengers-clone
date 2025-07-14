"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingData } from "@/constants/onboarding";

export default function useOnBoarding() {
  const router = useRouter();
  const lastIndex = OnboardingData.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const manageIndex = (index: number) => {
    if (index < 0) setCurrentIndex(0);
    if (index > lastIndex) setCurrentIndex(lastIndex);
    setCurrentIndex(index);
  };

  const redirectToHome = () => {
    router.push("/home");
  };

  return {
    isLastIndex: currentIndex === lastIndex,
    manageIndex,
    redirectToHome,
  };
}
