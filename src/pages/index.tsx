import { Box, Divider, Flex, Heading, Img, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Type } from "../components/Type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Continent } from "../components/Continent";
import { Navigation, Pagination, Autoplay } from "swiper";
import { api } from "../api/axios";
import { GetServerSideProps } from "next";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from "next/head";


export default function Home({ data }) {
  const isLarge = useBreakpointValue({
    base: false,
    lg: true,
  })

  const isMedium = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <>
    <Head>
      <title>WorldTrip</title>
    </Head>
      <Header />
      <Box backgroundImage="/assets/background.png" py="16" backgroundSize="cover">
      <Flex color="gray.50" maxW={1240} mx="auto" justify="space-between" position="relative" px={["8","16"]}>
        <Box as="section">
          <Heading fontWeight="500">
            5 Continentes,<br /> 
            infinitas possibilidades.
          </Heading>
          <Text mt="4" fontWeight="300">
            Chegou a hora de tirar do papel a viagem que você<br/> sempre sonhou.
          </Text>
        </Box>
        {isLarge && <Img src="/assets/airplane.svg" position="absolute" top={-10} right={16}/>}
      </Flex>
    </Box>
    <Box as="main" maxW={1240} mx="auto" >
      <Box as="section" pt="32" pb="16" px={["8","16"]}>
        <SimpleGrid columns={5} minChildWidth={172} spacing="8">
          <Type img="cocktail">vida noturna</Type>
          <Type img="surf">praia</Type>
          <Type img="building">moderno</Type>
          <Type img="museum">clássico</Type>
          <Type img="earth">e mais...</Type>
        </SimpleGrid>
      </Box>
      <Divider maxW={90} borderBottomWidth="2px" borderColor="gray.400" mx="auto"/>
      <Box as="section" my="8">
        <Heading px={["8","16"]} mb="8" textAlign="center" fontWeight="500" fontSize="3xl">Vamos nessa?<br/>Então escolha seu continente</Heading>
        <Swiper id="swiper-replace" modules={[Navigation, Pagination, Autoplay]} navigation={isMedium} pagination autoplay={{
          delay: 5000
        }}>
          {
            data.map(c => {
              return (
                <SwiperSlide key={c.id}>
                  <Continent continent={c} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </Box>
    </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const { data } = await api.get("/continents");

  console.log(data);
  return {
    props: {
      data,
    }
  }
}
