import {
  Box,
  Card,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Flex,
  CardHeader,
  Avatar,
} from "@chakra-ui/react";
import SocialMedia from "./socialMedia";

const About = () => {
  return (
    <Flex
      align="center"
      justify="center"
      m={{ base: 10, sm: 5, md: 10, lg: 20 }}
      minH="800px"
    >
      <Card maxW="md" >
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Lu, Shaohao" src="./avatar.jpeg" />
              <Box>
                <Heading size="sm">Lu, Shaohao</Heading>
                <Text>Founder, Bravo Studio</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            I am LU, Shaohao (Bravo) from{" "}
            <Text as="b">Zhuhai, Guangdong, China</Text>. I got both the
            bachelor and the master degree in{" "}
            <Text as="b">Sun Yat-sen University</Text>. I am a full stack
            engineer. I have worked as a backend engineer in{" "}
            <Text as="b">Tencent</Text> over the past two years. Now, I
            contribute myself as an engineer in{" "}
            <Text as="b">Hong Kong SAR, China</Text>.
          </Text>
        </CardBody>
        <SocialMedia />
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        ></CardFooter>
      </Card>
    </Flex>
  );
};

export default About;
