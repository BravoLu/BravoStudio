import { Box, Text } from "@chakra-ui/react";
import useConfig from "./useConfig";

const Footer = () => {
  const Config = useConfig();
  return (
    <Box
      p={4}
      bg="teal.500"
      color="white"
      position="fixed"
      bottom="0"
      width="100%"
      textAlign="center"
    >
      <Box>
        <Text as="b" fontSize={{base: 10, sm: 5, md: 10, lg: 15}}>
          &copy; 2023 {Config.config?.name}. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
