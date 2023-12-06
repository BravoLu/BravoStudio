import {
  Box,
  Image,
  Badge,
  Button,
  Stack,
  Link,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";
import {
  Card,
  CardBody,
  ButtonGroup,
  CardFooter,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { StarIcon } from "@chakra-ui/icons";
import { FaGithub, FaGitAlt } from "react-icons/fa";

export interface Repos {
  projectName: string;
  tags: string[];
  htmlUrl: string;
  homePage: string;
  language: string;
  starCnt: number;
  forkCnt: number;
  desc: string;
  updateAt: string;
}

function getTimeGap(timestamp: string) {
  const currentTime = new Date().getTime();
  const timestampDiff = currentTime - Date.parse(timestamp);

  const seconds = Math.floor(timestampDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Return a human-readable string
  if (days > 0) {
    return `updated ${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `updated ${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `updated ${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else {
    return `updated ${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
}

const ProjectCard = (props: Repos) => {
  const imageUrl = `/projects/${props.projectName}.jpg`;
  return (
    <Card width="100%" height="100%">
      <CardBody>
        <Image
          src={imageUrl}
          borderRadius="lg"
          width="100%"
          height="40%"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "/project-default-page.jpg";
          }}
          fallbackSrc="/project-default-page.jpg"
        />
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
          mt="5"
        >
          {getTimeGap(props.updateAt)}
        </Box>
        <Box alignItems="baseline">
          {props.tags.map((t) => (
            <Badge borderRadius="full" px="2" colorScheme="teal" key={t}>
              {t}
            </Badge>
          ))}
        </Box>
        <Stack mt="6" spacing="2">
          <HStack>
            <Heading size="sm" noOfLines={1}>
              {props.projectName}
            </Heading>
            <Box display="flex" alignItems="center">
              <Box as="span" color="gray.600" fontSize="sm">
                {props.starCnt}
              </Box>
              <StarIcon ml={1} color="orange" />
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {props.forkCnt}
              </Box>
              <FaGitAlt ml={1} />
            </Box>
          </HStack>
          <Stack direction="row">
            <Badge borderRadius="full" colorScheme="blue">
              {props.language}
            </Badge>
          </Stack>
        </Stack>
        <Box width="100%" height="80%" mt={1}>
          <Text noOfLines={3}>{props.desc}</Text>
        </Box>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
            <Link href={props.htmlUrl} target="_blank">
              Github
            </Link>
          </Button>
          {props.homePage && (
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
            >
              <Link href={props.homePage} target="_blank">
                Go
              </Link>
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
