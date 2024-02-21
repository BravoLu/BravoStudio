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
          <Text as="b">Personal Projects </Text>
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
          <Text as="b">Photos Gallery</Text>
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
          <Text as="b">Vlogs </Text>
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
          <Text as="b">Digital Medals Exhibition</Text>
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
      <ListItem>
        <HStack>
          <ListIcon as={InfoIcon} color="teal.500" />
          <Text as="b">Publications </Text>
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
