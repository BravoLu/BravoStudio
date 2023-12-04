import {
  Box,
  Flex,
  Spacer,
  Link as ChakraLink,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { CgImage, CgYoutube } from "react-icons/cg";
import { AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useConfig } from "./configContext";
const NavBar = () => {
  const Config = useConfig();
  return (
    <Flex
      align="center"
      p={2}
      bg="teal.500"
      color="white"
      position="fixed"
      width="100%"
      zIndex="1"
      top="0"
    >
      <Box p="2">
        <ChakraLink
          as={ReactRouterLink}
          to="/about"
          fontSize="xl"
          fontWeight="bold"
        >
          {Config.config?.name}
        </ChakraLink>
      </Box>
      <Spacer />
      <HStack spacing="20" direction="row">
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/about">
          <HStack>
            <AiOutlineUser />
            <Text as="b">About</Text>
          </HStack>
        </ChakraLink>
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/projects">
          <HStack>
            <AiOutlineFundProjectionScreen />
            <Text as="b">Projects</Text>
          </HStack>
        </ChakraLink>
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/photos">
          <HStack>
            <CgImage />
            <Text as="b">Photos</Text>
          </HStack>
        </ChakraLink>
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/videos">
          <HStack>
            <CgYoutube />
            <Text as="b">Videos</Text>
          </HStack>
        </ChakraLink>
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/workout">
          <HStack>
            <Text as="b">Workout</Text>
          </HStack>
        </ChakraLink>
        <Box>
          <ChakraLink href="https://github.com/BravoLu" target="_blank">
            <Icon as={FaGithub} h={8} w={8} />
          </ChakraLink>
        </Box>
      </HStack>
    </Flex>
  );
};

export default NavBar;
