import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import Medal from "./Medal";
import CustomMenu from "../utils/CustomMenu";
import { useEffect, useState } from "react";
import { LoadMedals } from "../utils/loader";
import { MedalEntity } from "./MedalEntity";

const Medals = () => {
  const [year, setYear] = useState("all");
  const [type, setType] = useState("all");
  const [medals, setMedals] = useState<MedalEntity[]>([]);
  const selectYear = {
    title: "Year",
    options: [
      {
        desc: "All",
        handleClick: () => {
          setYear("all");
        },
      },
      {
        desc: "2019",
        handleClick: () => {
          setYear("2019");
        },
      },
      {
        desc: "2023",
        handleClick: () => {
          setYear("2023");
        },
      },
    ],
  };

  const selectType = {
    title: "Type",
    options: [
      {
        desc: "All",
        handleClick: () => {
          setType("all");
        },
      },
      {
        desc: "Half Marathon",
        handleClick: () => {
          setType("Half Marathon");
        },
      },
    ],
  };

  useEffect(() => {
    LoadMedals("/medals.json").then((medals) => {
      if (year !== "all") {
        medals = medals.filter((m) => m.Year === year);
      }
      if (type !== "all") {
        medals = medals.filter((m) => m.Type === type);
      }
      setMedals(medals);
    });
  }, [year, type]);

  return (
    <Box m="50px" minH="1200px">
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 5 }}
        gap={10}
        alignItems="center"
      >
        <GridItem rowSpan={1} colSpan={{ sm: 1, md: 3, lg: 5 }} mt={10}>
          <CustomMenu {...selectYear} />
          <CustomMenu {...selectType} />
        </GridItem>

        {medals.map((m, idx) => (
          <GridItem colSpan={1}>
            <Medal key={idx} {...m}></Medal>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Medals;
