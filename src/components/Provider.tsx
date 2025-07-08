"use client";

import { initMock } from "@/mocks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  const client = new QueryClient();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      initMock();
    }
  }, []);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
