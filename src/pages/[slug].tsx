import { Box, Flex, Heading, HStack, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { api } from "../api/axios";
import { Header } from "../components/Header";
import Flag from "react-world-flags";

export default function Continent({ continent }) {
  return (
    <>
      <Head>
        <title>{`WorldTrip | ${continent.data.name}`}</title>
      </Head>
      <Header />
      <Box as="section" backgroundImage={`/assets/images/continents/${continent.id}.jpg` } backgroundSize="cover" backgroundPosition="center">
        <Box maxW={1240} mx="auto" px={["8","16"]} pt="56" pb="12"><Heading color="gray.50">{continent.data.name}</Heading></Box>
      </Box>
      <Box as="main" maxW={1240} mx="auto" px={["8","16"]}>
        <SimpleGrid as="section" columns={2} spacing="8" minChildWidth={250} py={["16","24"]}>
          <Text>{continent.data.info}</Text>
          <HStack spacing={42} mx="auto">
            <Box textAlign="center" fontWeight="500">
              <Text color="yellow.400" fontSize="4xl">{continent.data.countries}</Text>
              <Text>países</Text>
            </Box>
            <Box textAlign="center" fontWeight="500">
              <Text color="yellow.400" fontSize="4xl">{continent.data.languages}</Text>
              <Text>linguas</Text>
            </Box>
            <Box textAlign="center" fontWeight="500">
              <Text color="yellow.400" fontSize="4xl">{continent.data.cities}</Text>
              <Text>cidades</Text>
            </Box>
          </HStack>
        </SimpleGrid>
        <Box as="section" pb="8">
          <Heading fontSize="3xl">Cidades</Heading>
          <SimpleGrid columns={4} mt="8" spacing="8" minChildWidth={254}>
          {continent.cities.map(c => {
              return (
                <Box key={c.name} w={254} borderRadius="4px 4px 0 0" overflow="hidden" mx="auto">
                  <Img src={`/assets/images/cities/${c.name.toLowerCase()}.jpg`} h={173}></Img>
                  <Box>
                    <Flex p="4" border="1px solid" borderTop="none" borderColor="yellow.400" align="center" justify="space-between" borderRadius="0 0 4px 4px">
                      <Box> 
                        <Text fontWeight="500">{c.name}</Text>
                        <Text>{c.country}</Text>
                      </Box>
                      <Flag code={c.code} width="64" style={{
                          objectFit: "cover",
                          clipPath: " circle(16px)"
                        }}/>
                    </Flex>
                  </Box>
                </Box>
              )
            })
          }
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
} 

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  try {
    const {data: continent} = await api.get(`/continents/${slug}`)

    return {
      props: {
        continent
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}