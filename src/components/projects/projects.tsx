import { useState } from "react";
import { SimpleGrid, GridItem, Box } from "@chakra-ui/react";
import ProjectCard from "./projectCard";
import useProjects from "./useProjects";
import CardSkeleton from "../utils/cardSkeleton";
import Pagination from "../utils/pagination";

const Projects = () => {
  const { repos, repoNum, isLoading } = useProjects();
  const [page, setPage] = useState(1);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box m={20}>
      <SimpleGrid columns={5} gap={6}>
        {isLoading &&
          skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
        {repos !== undefined &&
          repos != null &&
          Object.values(repos)
            .slice((page - 1) * 10, page * 10 > repoNum ? repoNum : page * 10)
            .sort((a, b) => b["stargazers_count"] - a["stargazers_count"])
            .map((item) => (
              <GridItem w="100%" h="100%" bg="white.500" key={item["name"]}>
                <ProjectCard
                  projectName={item["name"]}
                  tags={item["topics"]}
                  htmlUrl={item["html_url"]}
                  homePage={item["homepage"]}
                  language={item["language"]}
                  starCnt={item["stargazers_count"]}
                  forkCnt={item["forks_count"]}
                  desc={item["description"]}
                  updateAt={item["updated_at"]}
                />
              </GridItem>
            ))}
      </SimpleGrid>
      <Pagination
        currentPage={page}
        totalPages={repoNum % 10 == 0 ? repoNum / 10: repoNum / 10 + 1}
        onPageChange={setPage}
      />
    </Box>
  );
};

export default Projects;