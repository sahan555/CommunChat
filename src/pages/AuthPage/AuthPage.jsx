import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex justifyContent={"center"} minH={"100vh"} alignItems={"center"}>
      <Container maxH={"container.md"} padding={0} maxWidth={"700px"}>
        <Flex alignItems={"center"} gap={10} justifyContent={"center"}>
          {/* Left side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={500} alt="auth" objectFit={"contain"} />
          </Box>
          {/* Right Side */}
          <VStack gap={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>
              <p>Get the App</p>
            </Box>
            <Flex gap={5} justifyContent={"center"} >
              <Image src="/playstore.png" h={10} alt="playstore" />
              <Image src="/microsoft.png" h={10} alt="microsoft" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
