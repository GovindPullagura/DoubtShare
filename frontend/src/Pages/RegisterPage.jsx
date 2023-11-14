import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function RegisterPage() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isTutor, setIsTutor] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    userType: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    axios
      .post(`http://localhost:8080/auth/register`, userDetails)
      .then((res) => {
        console.log(res.data);
        toast({
          title: res.data.msg,
          description: "Try logging in to your account.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>User Type</FormLabel>
                  <Select
                    placeholder="Select option"
                    onChange={(e) => {
                      setIsTutor(e.target.value === "tutor");
                      setUserDetails({
                        ...userDetails,
                        userType: e.target.value,
                      });
                    }}
                  >
                    <option value="tutor">Tutor</option>
                    <option value="student">Student</option>
                  </Select>
                </FormControl>
              </Box>
            </HStack>
            {isTutor && (
              <>
                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        subjectExp: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Language</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        language: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </>
            )}
            {!isTutor && (
              <FormControl isRequired>
                <FormLabel>Grade</FormLabel>
                <Input
                  type="text"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, grade: e.target.value })
                  }
                />
              </FormControl>
            )}
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleRegister}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link href="/login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
