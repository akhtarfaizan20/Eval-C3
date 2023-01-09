import Head from "next/head";

import { Inter } from "@next/font/google";

import {
  Heading,
  VStack,
  Image,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Skills from "../Components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VStack
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={"lg"}
          borderRadius={"20px"}
          w={useBreakpointValue({ base: "90%", md: "70%", lg: "50%" })}
          mx="auto"
          my={"10px"}
          p={"20px"}
        >
          <Image
            src={data.avatar_url}
            alt={data.name}
            w={"200px"}
            borderRadius={"50%"}
          />
          <Heading>{data.name}</Heading>
          <Link href={data.html_url} target="_blank">
            <Text fontSize="xl" color={"#9f8096"}>
              {data.login}
            </Text>
          </Link>
          <Text textAlign={"center"} color={"gray.600"}>
            {data.bio}
          </Text>
          <Link
            href={
              "https://drive.google.com/file/d/1HQnBOPvpcN1hlxDWOV94e0_q9F2UQDuh/view?usp=share_link"
            }
            target="_blank"
          >
            <Button colorScheme={"green"}>Resume</Button>
          </Link>
        </VStack>
        <Skills />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  let res = await fetch(`https://api.github.com/users/akhtarfaizan20`);
  let data = await res.json();
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
