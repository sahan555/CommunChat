import { Box, Button, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Box border={"1px solid grey"} borderRadius={8} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" alt="CommunChat" h={24} cursor={"pointer"} />
          <Input
            placeholder="Email"
            type="email"
            variant="outline"
            focusBorderColor="white"
            fontSize={14}
          />
          <Input
            placeholder="Password"
            type="password"
            variant="outline"
            focusBorderColor="white"
            fontSize={14}
          />
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              type="password"
              variant="outline"
              focusBorderColor="white"
              fontSize={14}
            />
          ) : null}

          <Button type="submit" variant={"solid"} colorScheme="blue" w={"100%"}>
            {isLogin ? "Log in" : "Sign Up"}
          </Button>
          <Box
            textAlign={"center"}
            my={3}
            h={"1px"}
            w={"full"}
            border={"1px solid grey"}
          >
            <Box position={"relative"} display={"inline-block"} h={"inherit"}>
              <Text
                position={"absolute"}
                bg={"blackAlpha.900"}
                left={"-25px"}
                textAlign={"center"}
                top={"-28px"}
                width={"50px"}
              >
                OR
              </Text>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default AuthForm;
