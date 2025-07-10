"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingData } from "@/constants/onboarding";

export default function useOnBoarding() {
  const router = useRouter();
  const lastIndex = OnboardingData.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const redirectToHome = () => {
    router.push("/home");
  };

  return {
    isLastIndex: currentIndex === lastIndex,
    setCurrentIndex,
    redirectToHome,
  };
}
