"use client";
import { Box, Image, Container, Stack, Text } from "@chakra-ui/react";

export default function Followus() {
  return (
    <Box>
      <Box
        borderTopWidth={1}
        borderBottomWidth={1}
        borderStyle={"solid"}
        borderColor={"color.secondary"}
      >
        <Container
          as={Stack}
          maxW={"lg"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"column"}>
            <Text color={"color.white"} fontWeight={"bold"}>
              @pontogo
            </Text>
            <Text color={"color.white"} fontWeight={"small"}>
              Se conecta com a gente
            </Text>
          </Stack>
          <Stack direction={"row"} spacing={6}>
            <Image
              src={"/Instagram_logo.png"}
              boxSize={"60px"}
              objectFit={"scale-down"}
            ></Image>
            <Image
              src={"/Facebook_logo.png"}
              boxSize={"60px"}
              objectFit={"scale-down"}
            ></Image>
            <Image
              bg={"color.white"}
              src={"/Linkedin_logo.png"}
              boxSize={"60px"}
              objectFit={"scale-down"}
              rounded={7}
            ></Image>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
