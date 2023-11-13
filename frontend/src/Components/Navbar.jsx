import { Flex, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { handleLogout } from "../Redux/AuthReducer/action";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1%"
      bgColor="teal.500" // Adjust the color as per your preference
      color="white"
      boxShadow="md" // Add a subtle box shadow
    >
      <Heading as="h1" fontSize="xl" fontWeight="bold">
        DoubtShare
      </Heading>

      {isLoggedIn && (
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Flex>
  );
};

export default Navbar;
