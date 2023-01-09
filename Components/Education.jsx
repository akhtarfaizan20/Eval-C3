import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const Education = () => {
  return (
    <Box
      boxShadow={"lg"}
      borderRadius={"20px"}
      w={useBreakpointValue({ base: "90%", md: "70%", lg: "50%" })}
      mx="auto"
      my={"10px"}
      p={"20px"}
    >
      <Heading>Education</Heading>
      <Heading size={"md"} as={"u"}>
        Full Stack Web Development (Masai School)
      </Heading>
      <Heading size={"sm"}>Jul,2022 to Mar,2023</Heading>
      <Heading size={"md"} as={"u"}>
        BCA (IGNOU)
      </Heading>
      <Heading size={"sm"}>Jul,2018 to june,2022</Heading>
    </Box>
  );
};

export default Education;
