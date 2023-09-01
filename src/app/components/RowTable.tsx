"use client";

import { Box, Text, HStack, VStack } from "@chakra-ui/react";

export default function RowTable() {
  return (
    <>
      <Box marginTop={"20px"} w={"100%"} minH={"90vh"}>
        <VStack spacing={"25px"}>
          <Box
            rounded={"5px"}
            border={"1px"}
            borderColor={"rgba(32, 41, 46, 0.30)"}
            bg={"color.white"}
            w={"100%"}
            h={"73px"}
          >
            <HStack spacing={"50px"}>
              <Box
                bg={"color.secondary"}
                rounded={"9999px"}
                margin={"10px"}
                width={"5px"}
                height={"50px"}
              ></Box>
              <VStack marginRight={"150px"}>
                <Text fontWeight={"700"} fontSize={"xl"}>
                  Caiã Ceron
                </Text>
                <Text fontWeight={"400"} color={"color.gray"} opacity={"0.5"}>
                  001
                </Text>
              </VStack>
              <Text
                fontWeight={"400"}
                fontSize={"xl"}
                opacity={"0.6"}
                color={"color.gray"}
                marginRight={"150px"}
              >
                31/08/23
              </Text>
              <Text
                fontWeight={"400"}
                fontSize={"xl"}
                opacity={"0.6"}
                color={"color.gray"}
              >
                23:59h
              </Text>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
