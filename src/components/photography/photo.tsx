import { useState, useEffect } from "react";
import { Box, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import Pagination from "../utils/pagination";
import PhotoCard from "./photoCard";
import CategoryList from "./categoryList";
import { LoadPhotos } from "../utils/loader";

const Photos = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState("Singapore");
  const [dir, setDir] = useState("singapore");
  const [images, setImages] = useState<string[]>([]);
  const [imageNum, setImageNum] = useState(0);
  const imagesPerPage = 8;
  useEffect(() => {
    LoadPhotos("/photos.json")
      .then((photo) => {
        const startIndex = (page - 1) * imagesPerPage;
        const selectedPhoto = photo.find((p) => p?.locate === selected);
        const imageCount =
          selectedPhoto === undefined || selectedPhoto.images === undefined
            ? 0
            : selectedPhoto.images.length;
        if (
          imageCount !== 0 &&
          selectedPhoto !== undefined &&
          selectedPhoto.images !== undefined &&
          selectedPhoto.dir != undefined
        ) {
          const endIndex = Math.min(page * imagesPerPage, imageCount);
          const visibleImages = selectedPhoto.images.slice(
            startIndex,
            endIndex
          );
          setImageNum(selectedPhoto.images.length);
          setImages(visibleImages);
          setDir(selectedPhoto.dir);
        }
      })
      .catch();
  }, [selected, page]);

  return (
    <HStack>
      <Box
        flex="initial"
        width={{ base: "30%", sm: "30%", md: "10%", lg: "8%" }}
      >
        <CategoryList selectedCategory={selected} onSelect={setSelected} />
      </Box>
      <Box>
        <VStack>
          <SimpleGrid
            mt={{ base: "20%", sm: "20%", md: "5%", lg: "5%" }}
            spacing={4}
            templateColumns={{
              sm: "1",
              md: "repeat(4, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
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
      </Box>
    </HStack>
  );
};

export default Photos;
