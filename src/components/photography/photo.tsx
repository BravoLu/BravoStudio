import { useState, useEffect } from "react";
import { Box, Grid, SimpleGrid, VStack } from "@chakra-ui/react";
import Pagination from "../utils/pagination";
import PhotoCard from "./photoCard";
import CategoryList from "./categoryList";
import JsonLoader from "../utils/jsonLoader";

const Photos = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState("Singapore");
  const [dir, setDir] = useState("singapore");
  const [images, setImages] = useState<string[]>([]);
  const [imageNum, setImageNum] = useState(0);
  const imagesPerPage = 8;
  useEffect(() => {
    JsonLoader("/photos.json")
      .then((photo) => {
        const startIndex = (page - 1) * imagesPerPage;
        const endIndex = Math.min(
          page * imagesPerPage,
          photo[selected]["images"].length
        );
        const visibleImages = photo[selected]["images"].slice(
          startIndex,
          endIndex
        );
        setImageNum(photo[selected]["images"].length);
        setImages(visibleImages);
        setDir(photo[selected]["dir"]);
      })
      .catch();
  }, [selected, page]);

  return (
    <Box>
      <CategoryList selectedCategory={selected} onSelect={setSelected} />
      <Grid
        gridTemplateRows={{ base: "80% auto" }}
        gridTemplateColumns={"10% auto"}
        color="black"
        fontWeight="bold"
        mt={10}
      >
        <Box></Box>
        <VStack>
          <SimpleGrid m="3%" spacing={4} templateColumns="repeat(4, 1fr)">
            {images.map((filename, index) => (
              <PhotoCard imageUrl={`/photos/${dir}/${filename}`} key={index} />
            ))}
          </SimpleGrid>
          <Pagination
            currentPage={page}
            totalPages={
                imageNum % imagesPerPage == 0
                ? imageNum / imagesPerPage
                : imageNum / imagesPerPage + 1
            }
            onPageChange={setPage}
          />
        </VStack>
      </Grid>
    </Box>
  );
};

export default Photos;
