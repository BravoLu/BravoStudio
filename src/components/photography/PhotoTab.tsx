import { useState, useEffect } from "react";
import {
  GridItem,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Pagination from "../utils/pagination";
import PhotoCard from "./photoCard";
import { LoadPhotos } from "../utils/loader";
import CustomMenu from "../utils/CustomMenu";

const PhotoTab = () => {
  const [page, setPage] = useState(1);
  const [type, setType] = useState("Singapore");
  const [dir, setDir] = useState("singapore");
  const [images, setImages] = useState<string[]>([]);
  const [imageNum, setImageNum] = useState(0);
  const imagesPerPage = 8;

  const selectType = {
    title: "Type",
    options: [
      {
        desc: "Singapore",
        handleClick: () => {
          setType("Singapore");
        },
      },
      {
        desc: "Sri Lanka",
        handleClick: () => {
          setType("Sri Lanka");
        },
      },
      {
        desc: "Indonesia",
        handleClick: () => {
          setType("Indonesia");
        },
      },
      {
        desc: "Thailand",
        handleClick: () => {
          setType("Thailand");
        },
      },
      {
        desc: "Xinjiang",
        handleClick: () => {
          setType("Xinjiang");
        },
      },
      {
        desc: "Beijing",
        handleClick: () => {
          setType("Beijing");
        },
      },
      {
        desc: "Marathon",
        handleClick: () => {
          setType("Marathon");
        },
      },
    ],
  };

  useEffect(() => {
    LoadPhotos("/photos.json")
      .then((photo) => {
        const startIndex = (page - 1) * imagesPerPage;
        const selectedPhoto = photo.find((p) => p?.locate === type);
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
  }, [type, page]);

  return (
    <Box m="50px" minH={{md: "1200px"}}>
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 5 }}
        gap={5}
        alignItems="center"
      >
        <GridItem rowSpan={1} colSpan={{ sm: 1, md: 3, lg: 5 }} mt={10}>
          <CustomMenu {...selectType} />
        </GridItem>

        {images.map((f, idx) => (
          <GridItem colSpan={1}>
            <PhotoCard imageUrl={`photos/${dir}/${f}`} key={idx} />
          </GridItem>
        ))}
        <GridItem rowSpan={1} colSpan={{ sm: 1, md: 3, lg: 5 }} mt={10}>
          <Pagination
            currentPage={page}
            totalPages={
              imageNum % imagesPerPage == 0
                ? imageNum / imagesPerPage
                : imageNum / imagesPerPage + 1
            }
            onPageChange={setPage}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default PhotoTab;
