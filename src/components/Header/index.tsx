import { Box, Button, Flex, Img } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { RiArrowLeftLine } from "react-icons/ri";

interface HeaderProps {
  
}

export const Header = ({  }: HeaderProps) => {
  const { asPath, push } = useRouter();
  
  return (
    <Flex as="header" py="4" align="center" maxW={1240} mx="auto" px={["8","16"]}>
      {asPath !== "/" && <Button onClick={() => push('/')} variant="unstyled">
        <RiArrowLeftLine size={24} color="#2D3748"/>
      </Button>}
      <Img src="/logo.svg" mx="auto"/>
    </Flex>
  )
}