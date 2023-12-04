import { Box, SimpleGrid } from "@chakra-ui/react";
import GrafanaPanel from "./panel";

const Workout = () => {
  return (
    <Box>
      <SimpleGrid
        m="7%"
        spacing={4}
        templateColumns="repeat(4, 1fr)"
        width="90%"
        height="100%"
      >
        <GrafanaPanel />
        <GrafanaPanel />
        <GrafanaPanel />
        <GrafanaPanel />
        <GrafanaPanel />
        <GrafanaPanel />
        <GrafanaPanel />
        <GrafanaPanel />
      </SimpleGrid>
    </Box>
  );
};

export default Workout;
