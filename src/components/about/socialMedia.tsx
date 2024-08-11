import { SimpleGrid, Box, GridItem, Link, Button } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter, AiFillYoutube, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import IcRed from "../icons/icRed";
import useConfig from "../useConfig";

const SocialMedia = () => {
  const Config = useConfig();
  return (
    <Box>
      <SimpleGrid columns={[3]} justifyItems="center">
        <GridItem>
          <Button
            as={Link}
            style={{ width: "6rem", height: "6rem" }}
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
            style={{ width: "6rem", height: "6rem" }}
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
            style={{ width: "6rem", height: "6rem" }}
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
          style={{ width: "6rem", height: "6rem" }}
          bgColor="white"
          href={Config.config?.xiaohongshuUrl}
          target="_blank"
        >
          <IcRed boxSize={16} />
        </Button>
        <GridItem>
          <Button
            as={Link}
            bgColor="white"
            style={{ width: "6rem", height: "6rem" }}
            href={Config.config?.linkedinUrl}
            target="_blank"
          >
            <AiFillLinkedin style={{ width: "100%", height: "100%", color: "blue"}} />
          </Button>
        </GridItem>
        <GridItem>
          <Button
            as={Link}
            bgColor="white"
            style={{ width: "6rem", height: "6rem" }}
            href={Config.config?.instagramUrl}
            target="_blank"
          >
            <AiFillInstagram style={{ width: "100%", height: "100%"}}/>
          </Button>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default SocialMedia;
