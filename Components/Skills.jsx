import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box
      boxShadow={"lg"}
      borderRadius={"20px"}
      w={useBreakpointValue({ base: "90%", md: "70%", lg: "50%" })}
      mx="auto"
      my={"10px"}
      p={"20px"}
    >
      <Text
        as={"b"}
        bgColor={"#7ae0ea"}
        px={"3px"}
        color={"gray.700"}
        mx={"3px"}
      >
        TYPESCRIPT
      </Text>
      <Text
        as={"b"}
        bgColor={"#7ae0ea"}
        px={"3px"}
        color={"gray.700"}
        mx={"3px"}
      >
        HTML
      </Text>
      <Text
        as={"b"}
        bgColor={"#7ae0ea"}
        px={"3px"}
        color={"gray.700"}
        mx={"3px"}
      >
        CSS
      </Text>
      <Text
        as={"b"}
        bgColor={"#7ae0ea"}
        px={"3px"}
        color={"gray.700"}
        mx={"3px"}
      >
        JAVASCRIPT
      </Text>
      <Text
        as={"b"}
        bgColor={"#7ae0ea"}
        px={"3px"}
        color={"gray.700"}
        mx={"3px"}
      >
        REACT
      </Text>
      <Text
        as={"b"}
        bgColor={"#7ae0ea"}
        px={"3px"}
        color={"gray.700"}
        mx={"3px"}
      >
        CHAKRAUI
      </Text>
      <Text
        as={"b"}
        bgColor={"#7ae0ea"}
        px={"3px"}
        color={"gray.700"}
        mx={"3px"}
      >
        NODEJS
      </Text>
      <Text
        as={"b"}
        bgColor={"#7ae0ea"}
        px={"3px"}
        color={"gray.700"}
        mx={"3px"}
      >
        EXPRESSJS
      </Text>
      <Text
        as={"b"}
        bgColor={"#7ae0ea"}
        px={"3px"}
        color={"gray.700"}
        mx={"3px"}
      >
        MONDODB
      </Text>
    </Box>
  );
};

export default Skills;
