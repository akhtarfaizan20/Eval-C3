import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillFolder, AiOutlineStar } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";

const ProjectCard = ({
  name,
  description,
  stargazers_count,
  forks_count,
  language,
}) => {
  return (
    <Box borderRadius={"10px"} boxShadow="base" p={"20px"}>
      <HStack>
        <AiFillFolder />
        <Text as={"b"}>{name}</Text>
      </HStack>
      <Text fontSize={"sm"}>{description}</Text>
      <HStack justifyContent={"space-between"}>
        <HStack>
          <HStack>
            <AiOutlineStar />
            <Text>{stargazers_count}</Text>
          </HStack>
          <HStack>
            <TbGitFork />
            <Text>{forks_count}</Text>
          </HStack>
        </HStack>
        <Text>{language}</Text>
      </HStack>
    </Box>
  );
};

export default ProjectCard;
