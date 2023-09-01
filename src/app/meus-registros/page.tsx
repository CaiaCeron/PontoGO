"use client";
import Link from "next/link";
import SidebarRegister from "../components/SidebarRegister";
import { Button } from "@chakra-ui/react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus Registros",
  description: "Registro de pontos",
};

export default function MyRegisters() {
  return (
    <>
      <SidebarRegister></SidebarRegister>
    </>
  );
}
