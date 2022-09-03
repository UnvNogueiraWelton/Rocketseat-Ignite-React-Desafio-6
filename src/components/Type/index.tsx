import { Flex, Img, Text } from "@chakra-ui/react"

interface TypeProps {
  img: string;
  children: string;
}

export const Type = ({ img, children }: TypeProps) => {
  return (
    <Flex direction="column" justify="center" align="center">
      <Img src={`/assets/icons/${img}.svg`} w="85"></Img>
      <Text mt="4" fontWeight="600" color="gray.600">{children}</Text>
    </Flex>
  )
}