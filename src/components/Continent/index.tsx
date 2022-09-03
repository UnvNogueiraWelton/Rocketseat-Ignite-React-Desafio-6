import {  Flex, Heading, Link, Text, useBreakpointValue } from "@chakra-ui/react"
interface ContinentProps {
  continent: {
    id: string;
    data: {
      name: string;
      excerpt: string;
    }
  }
}

export const Continent = ({ continent }: ContinentProps) => {

  const isMedium = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Link href={continent.id}
      display="block"
      backgroundImage={`/assets/images/continents/${continent.id}.jpg`}
      backgroundSize="cover"
      backgroundPosition="center"
      color="gray.50"
      _hover={{}}
      draggable={false}
    >
      <Flex textAlign="center" backdropFilter="brightness(.5)" direction="column" align="center" justify="center" h={isMedium ? 420 : 320}>
        <Heading>{continent.data.name}</Heading>
        <Text mt="4">{continent.data.excerpt}</Text>
      </Flex>
    </Link>
  )
}