"use client";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box position="relative">
        <SimpleGrid columns={3} paddingTop={10} paddingBottom={5}>
          <Box
            bg="color.secondary"
            height="1px"
            opacity={0.4}
            marginTop={10}
            marginBottom={10}
          ></Box>
          <Text margin={"auto"}>PontoGo - Todos direitos reservados</Text>
          <Box
            bg="color.secondary"
            height="1px"
            opacity={0.4}
            marginTop={10}
            marginBottom={10}
          ></Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
