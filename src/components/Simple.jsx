import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={"2"}
                py={"1"}
                rounded={"md"}
                _hover={{
                  textDecoration: "underline",
                  bg: "plum",
                }}
                as={RouterLink}
                to="/"
              >
                Inicio
              </Link>
              <Link
                px={"2"}
                py={"1"}
                rounded={"md"}
                _hover={{
                  textDecoration: "underline",
                  bg: "plum",
                }}
                as={RouterLink}
                to="/tareas"
              >
                Tareas
              </Link>
              <Link
                px={"2"}
                py={"1"}
                rounded={"md"}
                _hover={{
                  textDecoration: "underline",
                  bg: "plum",
                }}
                as={RouterLink}
                to="/sobre-nosotros"
              >
                Sobre Nosotros
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}></Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link as={RouterLink} variant="menu" to="/">
                Inicio
              </Link>
              <Link as={RouterLink} variant="menu" to="/task">
                Tareas
              </Link>
              <Link as={RouterLink} variant="menu" to="/aboutUs">
                Sobre Nosotros
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
