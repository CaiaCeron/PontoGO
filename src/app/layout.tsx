"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./designSystem";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/index";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "PontoGO",
  description: "My front-end test to get a job at brainny",
};

export function DashboardLayout() {
  return;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <ApolloProvider client={client}>
          <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
