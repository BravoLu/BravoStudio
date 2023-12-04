import { useEffect, useState } from "react";
import { VStack, SimpleGrid } from "@chakra-ui/react";
import VideoCard from "./videoCard";
import Pagination from "../utils/pagination";
import JsonLoader from "../utils/jsonLoader";
import { VideoInformation } from "./videoCard";

const Videos = () => {
  const [page, setPage] = useState(1);
  const numPerPage = 8;
  const [totalPage, setTotalPage] = useState(0);
  const [videos, setVideos] = useState<VideoInformation[]>([]);
  useEffect(() => {
    JsonLoader("/videos.json")
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
    <VStack>
      <SimpleGrid
        m="7%"
        spacing={4}
        templateColumns="repeat(4, 1fr)"
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
