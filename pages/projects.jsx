import { Box, Grid, Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = ({ data }) => {
  return (
    <Box
      boxShadow={"base"}
      borderRadius={"20px"}
      w={"90%"}
      mx="auto"
      my={"10px"}
      p={"20px"}
    >
      <Heading textAlign={"center"}>Projects</Heading>
      <Grid
        gridTemplateColumns={useBreakpointValue({
          base: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr",
        })}
        gap={"10px"}
        justifyContent={"center"}
      >
        {data.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </Grid>
    </Box>
  );
};

export async function getServerSideProps(context) {
  let res = await fetch(
    `https://api.github.com/search/repositories?q=user:${"akhtarfaizan20"}+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await res.json();

  return {
    props: { data: data.items }, // will be passed to the page component as props
  };
}

export default Projects;
