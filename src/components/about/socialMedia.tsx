import { SimpleGrid, Box, GridItem, Link, Button } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import IcRed from "../icons/icRed";
import IcNotion from "../icons/icNotion";
import useConfig from "../useConfig";
import IcMedium from "../icons/IcMedium";

const SocialMedia = () => {
  const Config = useConfig();
  return (
    <Box>
      <SimpleGrid columns={[3]} justifyItems="center">
        <GridItem>
          <Button
            as={Link}
            style={{ width: "8rem", height: "8rem" }}
            bgColor="white"
            href={Config.config?.githubUrl}
            target="_blank"
          >
            <AiFillGithub style={{ width: "100%", height: "100%" }} />
          </Button>
        </GridItem>
        <GridItem>
          <Button
            as={Link}
            style={{ width: "8rem", height: "8rem" }}
            bgColor="white"
            href={Config.config?.twitterUrl}
            target="_blank"
          >
            <AiOutlineTwitter
              style={{ width: "100%", height: "100%", color: "#1293BF" }}
            />
          </Button>
        </GridItem>
        <GridItem>
          <Button
            as={Link}
            style={{ width: "8rem", height: "8rem" }}
            bgColor="white"
            href={Config.config?.youtubeUrl}
            target="_blank"
          >
            <AiFillYoutube
              style={{ width: "100%", height: "100%", color: "red" }}
            />
          </Button>
        </GridItem>
        <Button
          as={Link}
          style={{ width: "8rem", height: "8rem" }}
          bgColor="white"
          href={Config.config?.xiaohongshuUrl}
          target="_blank"
        >
          <IcRed boxSize={20} />
        </Button>
        <GridItem>
          <Button
            as={Link}
            bgColor="white"
            style={{ width: "8rem", height: "8rem" }}
            href={Config.config?.mediumUrl}
            target="_blank"
          >
            <IcMedium boxSize={20} />
          </Button>
        </GridItem>
        <GridItem>
          <Button
            as={Link}
            bgColor="white"
            style={{ width: "8rem", height: "8rem" }}
            href={Config.config?.notionUrl}
            target="_blank"
          >
            <IcNotion boxSize={20} />
          </Button>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default SocialMedia;
