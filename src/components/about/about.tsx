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
import { useConfig } from "../configContext";
import SocialMedia from "./socialMedia";
import PageList from "./pageList";
import {AiOutlineWechat} from "react-icons/ai"

const About = () => {
  const Config = useConfig();
  return (
    <Flex align="center" justify="center" mt="11vh" mb="8vh">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        w="90vw"
        h="130vh"
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
              <Text as="b">Contact me on: </Text>
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
