import { Button } from "@chakra-ui/button";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <VStack spacing={4}>
          <Heading>Donate Your Yeild To Help Ukraine</Heading>
          <Box padding={4} borderWidth={2} borderRadius={10}>
            <Image
              src="/ukraine-flag.jpeg"
              width="500"
              height="400"
              alt="Ukraine waving Flag"
            />
          </Box>
          <Link href="/donate" passHref>
            <Button as="a" size="lg" colorScheme="blue">
              Donate Your Yield
            </Button>
          </Link>
        </VStack>
      </main>
    </div>
  );
};

export default Home;
