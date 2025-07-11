import PageTransition from "@/components/page-transition/PageTransition";

type OnboardingTransitionProps = {
  isFading: boolean;
  handleAnimationComplete: () => void;
  children: React.ReactNode;
};

export default function OnboardingTransition({
  isFading,
  handleAnimationComplete,
  children,
}: OnboardingTransitionProps) {
  return (
    <PageTransition
      animationType={isFading ? "fadeOut" : "fadeIn"}
      onAnimationComplete={handleAnimationComplete}
      $key={`${isFading.toString()}`}
    >
      {children}
    </PageTransition>
  );
}
