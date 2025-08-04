import { ModalComponent, ModalComponentProps, ModalComponentOptions } from "./modal";

export type ModalStackItem = {
  Component: ModalComponent;
  props: ModalComponentProps;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
  options: ModalComponentOptions;
}; 