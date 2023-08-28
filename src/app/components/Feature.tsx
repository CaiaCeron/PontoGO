"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Grid,
  Image,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

export default function Feature() {
  return (
    <Box p={4}>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={16} justify="center">
          <Stack spacing={4} as={Container} maxW={"1xl"} textAlign={"center"}>
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={6}
              justifyContent={"center"}
            >
              <Image boxSize="100px"></Image>
              <Image boxSize="100px"></Image>
              <Image boxSize="100px"></Image>
            </Grid>
            <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
              Encontre o plano perfeito
            </Heading>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
              Escolha o plano que melhor se encaixa na sua empresa e faça sua
              assinatura, dentro de 72h iremos liberar seus acessos.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
