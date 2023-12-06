import {
  Box,
  Flex,
  Spacer,
  Link as ChakraLink,
  HStack,
  Text,
  Icon,
  Popover,
  PopoverContent,
  useMediaQuery,
  PopoverArrow,
  PopoverTrigger,
  Button,
  VStack,
} from "@chakra-ui/react";
import { CgImage, CgYoutube } from "react-icons/cg";
import { AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useConfig  from "./useConfig";
const NavBar = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");
  const Config = useConfig();
  if (isSmallerThanMd)
    return (
      <Flex
        align="center"
        p={2}
        bg="teal.500"
        position="fixed"
        width="100%"
        zIndex="1"
        top="0"
      >
        <ChakraLink
          as={ReactRouterLink}
          to="/about"
          fontSize="xl"
          fontWeight="bold"
        >
          <Text color="white" as="b">
            {Config.config?.name}
          </Text>
        </ChakraLink>
        <Spacer />
        <Popover placement="bottom-start">
          <PopoverTrigger>
            <Button colorScheme="teal.500">About</Button>
          </PopoverTrigger>
          <PopoverContent w="100%" bgColor="teal.500" color="white">
            <PopoverArrow />
            <Box p={4}>
              <VStack spacing={4}>
                <Text as={ReactRouterLink} to="/about" fontWeight="bold">
                  About
                </Text>
                <Text as={ReactRouterLink} to="/projects" fontWeight="bold">
                  Projects
                </Text>
                <Text as={ReactRouterLink} to="/photos" fontWeight="bold">
                  Photos
                </Text>
                <Text as={ReactRouterLink} to="/videos" fontWeight="bold">
                  Videos
                </Text>
                <Text as={ReactRouterLink} to="/workout" fontWeight="bold">
                  Workout
                </Text>
              </VStack>
            </Box>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  return (
    <Flex
      align="center"
      bg="teal.500"
      color="white"
      position="fixed"
      width="100%"
      height="8%"
      zIndex="1"
      top="0"
      flexDirection={{ sm: "column", md: "row", lg: "row" }}
    >
      <Box>
        <ChakraLink
          as={ReactRouterLink}
          to="/about"
          fontSize="xl"
          fontWeight="bold"
          m={5}
        >
          {Config.config?.name}
        </ChakraLink>
      </Box>
      <Spacer />
      <HStack
        spacing={{ base: 4, sm: 4, md: 2, lg: 10 }}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "stretch", md: "center" }}
      >
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/about">
          <HStack>
            <AiOutlineUser />
            <Text>About</Text>
          </HStack>
        </ChakraLink>
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/projects">
          <HStack>
            <AiOutlineFundProjectionScreen />
            <Text>Projects</Text>
          </HStack>
        </ChakraLink>
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/photos">
          <HStack>
            <CgImage />
            <Text>Photos</Text>
          </HStack>
        </ChakraLink>
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/videos">
          <HStack>
            <CgYoutube />
            <Text>Videos</Text>
          </HStack>
        </ChakraLink>
        <ChakraLink fontSize="xl" as={ReactRouterLink} to="/workout">
          <HStack>
            <Text>Workout</Text>
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
