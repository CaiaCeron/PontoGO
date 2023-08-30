"use client";

import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  VStack,
  Box,
  Image,
} from "@chakra-ui/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      blur={"500px"}
      bgGradient={
        "radial-gradient(50% 80% at 35% 50%, rgba(138, 83, 255, 0.80) 0%, rgba(151, 105, 249, 0.35) 2%, rgba(161, 123, 244, 0.40) 10%, rgba(153, 109, 248, 0.30) 20%, rgba(138, 83, 255, 0.00) 95%);"
      }
    >
      <Flex flex={1.5}>
        <VStack margin={"auto"}>
          <Box w={"600px"} h={"650px"}>
            <Image w={"600px"} h={"700px"} src={"/PontoGO_login_img.png"} />
          </Box>
          <Text color={"color.primary"} fontSize={"5xl"} fontWeight={"700"}>
            Bem vindo ao PontoGo
          </Text>
          <Text color={"color.primary"} fontSize={"2xl"} fontWeight={"400"}>
            Aqui você fará toda gestão do
          </Text>
          <Text color={"color.primary"} fontSize={"2xl"} fontWeight={"400"}>
            seu sistema de pontos.
          </Text>
        </VStack>
      </Flex>
      <Flex p={8} flex={1} margin={"auto"}>
        <Stack spacing={7} w={"400px"} maxW={"md"}>
          <Image
            src={"/PontoGO_logo_roxo.png"}
            objectFit={"scale-down"}
          ></Image>
          <Heading fontSize={"5xl"} color={"color.primary"}>
            Faça login
          </Heading>
          <FormControl id="email">
            <FormLabel fontSize={"2xl"} color={"color.gray"}>
              Email
            </FormLabel>
            <Input
              bg={"color.white"}
              border={"1px"}
              borderColor={"#20292E4D"}
              h={"45px"}
              placeholder={"exemplo@email.com"}
              type="email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel fontSize={"2xl"} color={"color.gray"}>
              Senha
            </FormLabel>
            <InputGroup>
              <Input
                bg={"color.white"}
                border={"1px"}
                borderColor={"#20292E4D"}
                rounded={"5px"}
                h={"45px"}
                placeholder={"*************"}
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement h={"full"} paddingRight={4}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Button variant={"link"} color={"color.primary"}>
                Esqueci minha senha
              </Button>
            </Stack>
            <Button
              rounded={"5px"}
              h={"45px"}
              bg={"color.primary"}
              color={"color.white"}
              variant={"solid"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Entrar
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
