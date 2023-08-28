import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props: any) {
  return (
    <>
      <Box {...props}>
        <Text fontSize="lg" fontWeight="bold">
          Logo
        </Text>
      </Box>
    </>
  );
}

const MenuToggle = ({ toggle, isOpen }: { toggle: any; isOpen: any }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};
