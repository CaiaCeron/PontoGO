"use client";

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  Image,
  Button,
  DrawerContent,
  useDisclosure,
  BoxProps,
  HStack,
  VStack,
  FlexProps,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiNotepadLight } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiOutlineCaretDown } from "react-icons/ai";
import RowTable from "./RowTable";

interface LinkItemProps {
  name: string;
  icon: IconType;
  pageLink: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: LuLayoutDashboard, pageLink: "/dashboard" },
  { name: "Meus registros", icon: PiNotepadLight, pageLink: "/meus-registros" },
];

export default function SidebarRegister() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box w={"100%"} bg={"#F2F2F2"}>
        <SidebarContent
          bg={"white"}
          w={"180px"}
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/* Content */}
          <Button
            w={"200px"}
            h={"50px"}
            mb={"8"}
            bg={"color.primary"}
            color={"white"}
            rounded={"5px"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Registrar ponto
          </Button>
          <HStack spacing="10%" w={"full"}>
            <Box>
              <HStack w={"full"}>
                <Text marginRight={"5px"} fontSize={"2xl"} fontWeight={"800"}>
                  Colaborador
                </Text>
                <IconButton
                  variant="ghost"
                  aria-label="open menu"
                  icon={<AiOutlineCaretDown />}
                />
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Text marginRight={"5px"} fontSize={"2xl"} fontWeight={"800"}>
                  Data
                </Text>
                <IconButton
                  variant="ghost"
                  aria-label="open menu"
                  icon={<AiOutlineCaretDown />}
                />
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Text marginRight={"5px"} fontSize={"2xl"} fontWeight={"800"}>
                  Hora
                </Text>
                <IconButton
                  variant="ghost"
                  aria-label="open menu"
                  icon={<AiOutlineCaretDown />}
                />
              </HStack>
            </Box>
          </HStack>
          <VStack spacing={"25px"}>
            <Box w={"100%"}>
              <RowTable></RowTable>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <>
      <Box
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex
          h={"40"}
          alignItems={"center"}
          mx={"8"}
          justifyContent="space-between"
        >
          <Image src="/PontoGO_logo_roxo.png"></Image>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <>
      <Box
        as="a"
        href={"/meus-registros"}
        color={"color.primary"}
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          w={"full"}
          h={"103px"}
          marginBottom={"1px"}
          marginLeft={"1px"}
          borderTopWidth={"1px"}
          borderBottomWidth={"1px"}
          borderLeftWidth={"5px"}
          borderLeftColor={"color.primary"}
          role="group"
          cursor="pointer"
          _hover={{
            bg: "color.secondary",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr={"2"}
              ml={"4"}
              fontSize="24"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent="flex-start"
        {...rest}
      >
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Image
          justifyContent={"end"}
          boxSize={"50px"}
          src="/PontoGO_logo_only.png"
          objectFit={"scale-down"}
        ></Image>
      </Flex>
    </>
  );
};
