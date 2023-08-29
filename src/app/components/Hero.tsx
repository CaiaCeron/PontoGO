"use client";
import React from "react";
import { Heading, Flex, Stack, Image, Button, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Stack minH={"100%"} direction={{ base: "column", md: "row" }}>
        <Flex flex={2} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                fontWeight={"small"}
                fontSize={"24px"}
                letterSpacing={"3.96px"}
              >
                ESQUECE O PONTO MANUAL
              </Text>
              <br />
              {""}

              <Text color={"color.white"} as={"span"}>
                Chegou a nova realidade <br /> para&nbsp;
              </Text>

              <Text color={"color.secondary"} as={"span"}>
                Controle de Pontos
              </Text>

              <Text color={"color.secondary"} as={"span"}></Text>
              {""}
            </Heading>
            <Text
              fontSize={{ base: "normal", lg: "lg" }}
              color={"color.white"}
              fontWeight={"medium"}
            >
              Com o PontoGo seus colaboradores poderão bater
              <br />
              seus pontos de forma fácil e rápida, possuindo
              <br />
              também uma Dashboard intuitiva.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                h={"50px"}
                w={"160px"}
                rounded={"5px"}
                bg={"color.secondary"}
                color={"white"}
                size={"lg"}
                fontWeight={"regular"}
                _hover={{
                  bg: "purple.500",
                }}
              >
                Assinar agora
              </Button>
              <Button
                h={"50px"}
                w={"160px"}
                rounded={"5px"}
                variant={"outline"}
                color={"white"}
                size={"lg"}
                fontWeight={"regular"}
              >
                Ver planos
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={2}>
          <Image src="/Rocket_man.png" objectFit={"scale-down"} />
        </Flex>
      </Stack>
    </>
  );
}
