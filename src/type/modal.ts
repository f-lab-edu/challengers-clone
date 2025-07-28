import { animationVariants } from "@/constants/transition";

export type ModalComponentProps = any;
export type ModalComponent = React.ComponentType<ModalComponentProps>;
export type animationType = keyof typeof animationVariants | undefined;

export type ModalComponentOptions = {
  animationType?: animationType;
  enableESC?: boolean;
  enableFocusTrap?: boolean;
  enableDimmed?: boolean;
} 