"use client";
import React from "react";
import NextLink from "next/link";
import { Box, Flex, HStack, Image, Button, Link } from "@chakra-ui/react";

export default function Navbar() {
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
}
