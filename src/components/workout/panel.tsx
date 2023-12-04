import {
  CardBody,
  CardFooter,
  CardHeader,
  AspectRatio,
  Card,
} from "@chakra-ui/react";

const GrafanaPanel = () => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody>
        {" "}
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            src="http://localhost:3000/d-solo/fd3efea9-59cf-4294-9475-89e32b87f4aa/applehealthdemo?orgId=1&from=1701372288619&to=1701393888620&panelId=1"
            width="450"
            height="200"
          />
        </AspectRatio>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GrafanaPanel;
