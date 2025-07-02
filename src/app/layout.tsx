import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.css";
import GlobalNav from "@/components/navigation/GlobalNav";
import BottomNav from "@/components/navigation/BottomNav";

import StyledComponentsRegistry from "./_lib/registry";
import Container from "@/components/Container";
import Provider from "@/components/Provider";

export const metadata: Metadata = {
  title: "challengers clone",
  description: "challengers clone application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${styles.layout}`}>
        <Provider>
          <StyledComponentsRegistry>
            <Container>
              <GlobalNav />
              {children}
              <BottomNav />
            </Container>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
