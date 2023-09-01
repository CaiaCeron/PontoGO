"use client";

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function Card() {
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"333px"}
          w={"full"}
          bg={"rgba(255, 255, 255, 0.08)"}
          rounded={"10px"}
          overflow={"hidden"}
          color={"color.secondary"}
          border={"1px"}
        >
          <Stack textAlign={"center"} p={3} align={"center"}>
            <Text
              fontSize={"20px"}
              fontWeight={400}
              p={2}
              px={3}
              color={"color.white"}
              rounded={"full"}
            >
              Plano Prata
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"6xl"} fontWeight={800} color={"color.white"}>
                R$50
              </Text>
            </Stack>
            <Text fontWeight={400}>Uso de 10 colaboradores</Text>
          </Stack>

          <Box px={8} py={10}>
            <List px={1} spacing={3} color={"color.white"}>
              <ListItem>
                <ListIcon as={CheckIcon} />
                &nbsp; Área de meus registros
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                &nbsp; Dashboard
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} />
                &nbsp; Acesso de 10 colaboradores
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} />
                &nbsp; Suporte exclusivo
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} />
                &nbsp; Email corporativo
              </ListItem>
            </List>

            <Button
              mt={10}
              ml={10}
              w={"160px"}
              h={"50px"}
              bg={"color.secondary"}
              color={"white"}
              rounded={"5px"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Assinar agora
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
}
