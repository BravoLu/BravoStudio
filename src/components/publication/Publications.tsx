import { Box } from "@chakra-ui/react";
import Publication from "./publication";
const Publications = () => {
  return (
    <>
      <Box m={{ base: "50px", lg: 100 }} minH={{ md: "1200px" }}>
        <Publication></Publication>
      </Box>
    </>
  );
};

export default Publications;
