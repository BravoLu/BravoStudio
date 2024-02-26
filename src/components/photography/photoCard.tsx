import {
  Box,
  Card,
  Image,
  Modal,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ImageComponent } from "./ImageComponent";

export interface PhotoInfo {
  locate?: string;
  dir?: string;
  images?: string[];
}

const PhotoCard = ({ imageUrl }: { imageUrl: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      width="100%"
      height="100%"
      _hover={{
        cursor: "pointer",
        transform: "scale(1.05)",
        transition: "transform 0.1s ease",
      }}
      m={{ base: 2, sm: 2, md: 3, lg: 5 }}
    >
      <Card>
        <ImageComponent src={imageUrl} onClick={onOpen} />
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalContent>
          <ModalBody>
            <Image
              justifyContent="center"
              src={imageUrl}
              w="auto"
              h="auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/default-image.jpeg";
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PhotoCard;
