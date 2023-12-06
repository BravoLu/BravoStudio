import {
  Box,
  Card,
  Heading,
  Stack,
  Text,
  AbsoluteCenter,
  CardBody,
  CardFooter,
  Image,
  Flex,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import useConfig from "../useConfig";
import SocialMedia from "./socialMedia";
import PageList from "./pageList";
import { AiOutlineWechat } from "react-icons/ai";

const About = () => {
  const Config = useConfig();
  return (
    <Flex
      align="center"
      justify="center"
      m={{ base: 10, sm: 5, md: 10, lg: 20 }}
    >
      <Card
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        overflow="hidden"
        variant="outline"
        w="100%"
        h="100%"
      >
        <Stack>
          <CardBody>
            <Heading size="lg">
              <Box position="relative" padding="10">
                <Divider />
                <AbsoluteCenter bg="white" px="4">
                  <Text color="teal.500">About Me</Text>
                </AbsoluteCenter>
              </Box>
            </Heading>
            <Text py="2" fontSize={25} textIndent="3rem">
              {Config.config?.selfIntro}
            </Text>
            <PageList />
            <Divider m={3} />
            <Text fontSize={20} as="b" color="teal.500">
              You can find me on the following platforms:
            </Text>
            <SocialMedia />
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
            <HStack>
              <AiOutlineWechat />
              <Image
                src="/qrcode_for_gh_fcdd6f322f24_258.jpg"
                width="20%"
              ></Image>
              <EmailIcon />
              <Text as="b">{Config.config?.email}</Text>
            </HStack>
          </CardFooter>
        </Stack>
        <Image objectFit="cover" src="/avatar.jpeg" />
      </Card>
    </Flex>
  );
};

export default About;
