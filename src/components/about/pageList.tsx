import {
  List,
  ListItem,
  ListIcon,
  Text,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon, InfoIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";

const PageList = () => {
  return (
    <List spacing={3} mt={5}>
      <ListItem>
        <HStack>
          <ListIcon as={InfoIcon} color="teal.500" />
          <Text as="b">You can see all my personal projects </Text>
          <ChakraLink as={ReactRouterLink} to="/projects" color="teal.500">
            <ArrowForwardIcon
              boxSize={8}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.1s ease",
              }}
            />
          </ChakraLink>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <ListIcon as={InfoIcon} color="teal.500" />
          <Text as="b">I will post all the photos that I took on the journey </Text>
          <ChakraLink as={ReactRouterLink} to="/photos" color="teal.500">
            <ArrowForwardIcon
              boxSize={8}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.1s ease",
              }}
            />
          </ChakraLink>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <ListIcon as={InfoIcon} color="teal.500" />
          <Text as="b">I make some videos about my daily life </Text>
          <ChakraLink as={ReactRouterLink} to="/videos" color="teal.500">
            <ArrowForwardIcon
              boxSize={8}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.1s ease",
              }}
            />
          </ChakraLink>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <ListIcon as={InfoIcon} color="teal.500" />
          <Text as="b">My workout data can be tracked </Text>
          <ChakraLink as={ReactRouterLink} to="/workout" color="teal.500">
            <ArrowForwardIcon
              boxSize={8}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.2)",
                transition: "transform 0.1s ease",
              }}
            />
          </ChakraLink>
        </HStack>
      </ListItem>
    </List>
  );
};

export default PageList;
