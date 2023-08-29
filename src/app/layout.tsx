"use client";
import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./designSystem";

export const metadata: Metadata = {
  title: "PontoGO",
  description: "My front-end test to get a job at brainny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
