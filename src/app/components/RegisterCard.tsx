"use client";

import {
  Box,
  Center,
  Image,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function RegisterCard() {
  return (
    <Center py={6}>
      <Box
        w={"full"}
        maxW={"400px"}
        h={"477px"}
        maxH={"477px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Text fontSize={"2xl"}>Registrar novo ponto</Text>
          </Stack>

          <Stack direction={"column"} justify={"center"} spacing={3}>
            <Stack spacing={0} align={"center"}>
              <Image
                boxSize={"100px"}
                src="/Watch_icon.png"
                objectFit={"scale-down"}
              ></Image>
              <Text fontSize={"3xl"}>10:30</Text>
              <Text fontSize={"lg"} color={"color.primary"} opacity={"0.5"}>
                31/10/1995
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}></Stack>
          </Stack>
          <Stack direction={"column"} align={"center"}>
            <Button
              w={"200px"}
              h={"50px"}
              mt={8}
              bg={"color.primary"}
              color={"white"}
              rounded={"5px"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Bater ponto
            </Button>
            <Button
              variant={"outline"}
              w={"200px"}
              h={"50px"}
              mt={2}
              bg={"color.white"}
              borderColor={"color.primary"}
              color={"color.primary"}
              rounded={"5px"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
