"use client";

import {
  Box,
  Container,
  Heading,
  Grid,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Feature() {
  return (
    <>
      <Box p={4}>
        <Box>
          <Grid
            px={20}
            marginLeft={"100px"}
            marginRight={"100px"}
            templateColumns="repeat(4, 1fr)"
          >
            <Box>
              <Image
                margin={"auto"}
                src={"/Brainny.png"}
                boxSize={"230px"}
                objectFit={"scale-down"}
              ></Image>
            </Box>
            <Box>
              <Image
                margin={"auto"}
                src={"/Amo_pet.png"}
                boxSize={"230px"}
                objectFit={"scale-down"}
              ></Image>
            </Box>
            <Box>
              <Image
                margin={"auto"}
                src={"/Dot_bus.png"}
                boxSize={"230px"}
                objectFit={"scale-down"}
              ></Image>
            </Box>
            <Box>
              <Image
                margin={"auto"}
                src={"/GoStudy.png"}
                boxSize={"230px"}
                objectFit={"scale-down"}
              ></Image>
            </Box>
          </Grid>
        </Box>
        <Stack spacing={6} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"5xl"} fontWeight={"extrabold"}>
            Encontre o plano perfeito
          </Heading>
          <Text color={"color.white"} fontSize={"2xl"} opacity={"0.7"}>
            Escolha o plano que melhor se encaixa na sua empresa e faça
            <br /> sua assinatura, dentro de 72h iremos liberar seus acessos.
          </Text>
        </Stack>
      </Box>
    </>
  );
}
