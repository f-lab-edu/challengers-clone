import { useCallback } from "react";
import FocusTrap from "@/components/modal/FocusTrap";
import PageTransition from "@/components/page-transition/PageTransition";
import Dimmed from "@/components/modal/Dimmed";
import { ModalComponent, ModalComponentProps, ModalComponentOptions } from "@/type/modal";

type UseModalRendererProps = {
  close: (result?: any) => void;
}

export default function useModalRenderer({ close }: UseModalRendererProps) {
  const renderModalWithWrappers = useCallback((
    Component: ModalComponent,
    props: ModalComponentProps,
    options: ModalComponentOptions,
    modalIdx: number
  ) => {
    const { enableFocusTrap, animationType, enableDimmed } = options;

    // key 생성을 위한 컴포넌트 이름 추출
    const componentName = Component.displayName || `${Component.name}` || `Modal${modalIdx}`;
    const modalKey = `modal-${componentName}-${modalIdx}`;

    const modalContent = (
      <FocusTrap key={`focus-${modalKey}`
      } isActive={enableFocusTrap} >
        <Component {...props} />
      </FocusTrap>
    );

    const withAnimation = animationType ? (
      <PageTransition
        animationType={animationType}
        key={`animation-${modalKey}`
        }
      >
        {modalContent}
      </PageTransition>
    ) : modalContent;

    return enableDimmed ? (
      <Dimmed key={`dimmed-${modalKey}`} onClose={close} >
        {withAnimation}
      </Dimmed>
    ) : withAnimation;
  }, [close]);

  return { renderModalWithWrappers };
} 