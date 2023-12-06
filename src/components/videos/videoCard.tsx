import {
  AspectRatio,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Text,
} from "@chakra-ui/react";

export interface VideoInformation {
  Id: string;
  Heading: string;
  Desc: string;
  tags: string[];
}

const VideoCard = ({ video }: { video: VideoInformation }) => {
  return (
    <Card width="100%" height="100%">
      <AspectRatio ratio={1}>
        <iframe
          src={`https://www.youtube.com/embed/${video.Id}`}
          allowFullScreen
        />
      </AspectRatio>
      <CardHeader fontWeight="bold">{video.Heading}</CardHeader>
      <CardBody>
        <Text>{video.Desc}</Text>
        {video.tags.length !== 0 &&
          video.tags.map((tag, index) => (
            <Badge borderRadius="full" px="2" colorScheme="teal" key={index}>
              {tag}
            </Badge>
          ))}
      </CardBody>
    </Card>
  );
};

export default VideoCard;
