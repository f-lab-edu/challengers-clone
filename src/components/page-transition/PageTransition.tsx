// components/PageTransitionWrapper.tsx

"use client";

import { animationVariants } from "@/constants/transition";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import styled from "styled-components";

type PageTransitionProps = {
  children: React.ReactNode;
  animationType: keyof typeof animationVariants;
  onAnimationComplete?: () => void;
  $key?: string;
};

export default function PageTransition({
  animationType = "load",
  children,
  onAnimationComplete,
  $key,
}: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={"motion-div"}
        key={$key || pathname}
        {...animationVariants[animationType]}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: '100%',
          position: "relative",
        }}
        onAnimationComplete={() => {
          onAnimationComplete?.();
        }}
      >
        <Wrapper>{children}</Wrapper>
      </motion.div>
    </AnimatePresence>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
`;
