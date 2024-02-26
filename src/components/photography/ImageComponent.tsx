import { useState, useMemo } from "react";
import { Center, Image, Spinner } from "@chakra-ui/react";

export const ImageComponent = ({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) => {
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };
  const imageElement = useMemo(() => {
    return (
      <Image
        src={src}
        onLoad={handleImageLoad}
        width="100%"
        height="100%"
        overflow="hidden"
        borderRadius="lg"
        onClick={onClick}
        display={loaded? "block": "none"}
      />
    );
  }, [src, loaded]);

  return (
    <>
      {imageElement}
      {!loaded && (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}
    </>
  );
};


