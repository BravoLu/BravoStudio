import {
  Box,
  Text,
  Grid,
  GridItem,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import useConfig from "./useConfig";
import { EmailIcon } from "@chakra-ui/icons";

const Footer = () => {
  const Config = useConfig();
  return (
    <Box
      p={4}
      bg="teal.500"
      width="100%"
      textAlign="center"
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%"></GridItem>
        <GridItem w="100%">
          <Text as="b" fontSize={{ base: 10, sm: 5, md: 10, lg: 15 }}>
            &copy; 2024 Bravo. All rights reserved.
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Tag size="lg" colorScheme="teal.500">
            <EmailIcon mr={2} />
            <TagLabel>{Config.config?.email}</TagLabel>
          </Tag>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
