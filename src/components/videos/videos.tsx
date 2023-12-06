import { useEffect, useState } from "react";
import { VStack, SimpleGrid } from "@chakra-ui/react";
import VideoCard from "./videoCard";
import Pagination from "../utils/pagination";
import {LoadVideos} from "../utils/loader";
import { VideoInformation } from "./videoCard";

const Videos = () => {
  const [page, setPage] = useState(1);
  const numPerPage = 8;
  const [totalPage, setTotalPage] = useState(0);
  const [videos, setVideos] = useState<VideoInformation[]>([]);
  useEffect(() => {
    LoadVideos("/videos.json")
      .then((result) => {
        setVideos(result);
        setTotalPage(
          result.length % numPerPage === 0
            ? result.length / numPerPage
            : result.length / numPerPage + 1
        );
      })
      .catch();
  }, []);
  return (
    <VStack m={{ base: 10, sm: 10, md: 10, lg: 20 }}>
      <SimpleGrid
        m={{ base: "7%", sm: "7%", md: "5%", lg: "3%" }}
        spacing={4}
        templateColumns={{
          sm: "1",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        width="90%"
        height="100%"
      >
        {videos
          .slice(
            (page - 1) * numPerPage,
            Math.min(page * numPerPage, videos.length)
          )
          .map((video, index) => (
            <VideoCard video={video} key={index} />
          ))}
      </SimpleGrid>
      <Pagination
        currentPage={page}
        totalPages={totalPage}
        onPageChange={setPage}
      />
    </VStack>
  );
};

export default Videos;
