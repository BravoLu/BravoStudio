import {
  Card,
  CardBody,
  Image,
  Divider,
  TableContainer,
  Tr,
  Tbody,
  Table,
  Td,
  Badge,
} from "@chakra-ui/react";
import { MedalEntity } from "./MedalEntity";

const Medal = (props: MedalEntity) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          boxSize={{sm: "200px", lg: "300px"}}
          src={props.Image}
          borderRadius="lg"
        />
        <Badge colorScheme='green'>{props.Type}</Badge>
        <TableContainer>
          <Table size="sm">
            <Tbody>
              <Tr>
                <Td>Year</Td>
                <Td>{props.Year}</Td>
              </Tr>
              <Tr>
                <Td>Location</Td>
                <Td>{props.Location}</Td>
              </Tr>
              <Tr>
                <Td>Time</Td>
                <Td>{props.Time}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default Medal;
