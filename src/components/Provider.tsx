"use client";

import ModalProvider from "@/contexts/ModalContext";
import { initMock } from "@/mocks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import GlobalActions from "./GlobalActions";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  const [isReady, setIsReady] = useState(false);
  const client = new QueryClient();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      initMock().then(() => {
        setIsReady(true);
      });
    }
  }, []);

  if (!isReady) return <div>Loading...</div>;

  return (
    <QueryClientProvider client={client}>
      <ModalProvider>
        <GlobalActions needsBottomSheet={true} bottomSheetData={{}} />
        {children}
      </ModalProvider >
    </QueryClientProvider>
  );
}
