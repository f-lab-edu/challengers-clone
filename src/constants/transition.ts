import { easeInOut } from "framer-motion";

export const variants = {
  load: {
    initial: {
      x: "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
  fadeIn: {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
  fadeOut: {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};
