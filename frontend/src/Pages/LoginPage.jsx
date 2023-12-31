import React, { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const { isLoggedIn, userDetails } = useSelector((store) => {
    return {
      isLoggedIn: store.authReducer.isLoggedIn,
      userDetails: store.authReducer.userDetails,
    };
  });

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const details = { email, password };
    dispatch(login(details));
  };
  if (isLoggedIn) {
    if (userDetails.userType === "tutor") {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/" />;
    }
  }
  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
      bg="gray.50"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          // bg={useColorModeValue("white", "gray.700")}
          bg="gray.50"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={(e) => setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  New User?{" "}
                  <Link href="/register" color={"blue.400"}>
                    Register Here
                  </Link>
                </Text>
              </Stack>
              <Button
                onClick={handleLogin}
                color={"white"}
                _hover={{ bgColor: "rgb(5,161,163)" }}
                bgColor={"rgb(15,181,183)"}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
