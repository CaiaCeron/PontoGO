"use client";
import React from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Button,
  Heading,
  Image,
  Stack,
  HStack,
  Text,
  Container,
  Link,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Box>
        <Flex
          h={20}
          px={20}
          paddingTop={"80px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Link as={NextLink} href={"/"}>
              <Image
                boxSize={"164px"}
                src="/Ponto_go_logo.png"
                objectFit={"scale-down"}
              />
            </Link>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              as={NextLink}
              href={"/login"}
              h={"50px"}
              w={"100px"}
              rounded={"5px"}
              variant={"link"}
              color={"color.white"}
              size={"lg"}
              fontWeight={"regular"}
            >
              Início
            </Button>
            <Button
              as={NextLink}
              href={"/login"}
              h={"50px"}
              w={"160px"}
              rounded={"5px"}
              variant={"link"}
              color={"color.white"}
              size={"lg"}
              fontWeight={"regular"}
            >
              Planos
            </Button>
            <Button
              as={NextLink}
              href={"/login"}
              h={"50px"}
              w={"160px"}
              rounded={"5px"}
              variant={"solid"}
              color={"color.primary"}
              size={"lg"}
              fontWeight={"regular"}
            >
              Fazer Login
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

const HeroSection = () => {
  return (
    <Stack minH={"full"} direction={{ base: "column", md: "row" }}>
      <Flex flex={2} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
              Chegou a nova realidade
            </Text>
            <br />
            {""}
            <Text color={"color.secondary"} as={"span"}>
              para Controle de Pontos
            </Text>

            <Text color={"color.secondary"} as={"span"}></Text>
            {""}
          </Heading>
          <Text
            fontSize={{ base: "normal", lg: "lg" }}
            color={"color.white"}
            fontWeight={"medium"}
          >
            Com o PontoGo seus colaboradores poderão bater seus pontos de forma
            fácil e rápida, possuindo também uma Dashboard intuitiva.
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
  );
};

const Feature = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
};

export default function LandingPage() {
  return (
    <>
      <Container backgroundColor={"#120039"} maxW={"full"} p={0}>
        <Box
          color={"white"}
          position={"relative"}
          backgroundImage={"/Galaxy_background.png"}
          backgroundSize={"cover"}
        >
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          <Feature></Feature>
        </Box>
      </Container>
    </>
  );
}
