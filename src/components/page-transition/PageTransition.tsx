// components/PageTransitionWrapper.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: Props) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={"motion-div"}
        key={pathname}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
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
  height: 100vh;
  z-index: 100;
  padding: 15% 16px 7%;
  background-color: white;
`;
