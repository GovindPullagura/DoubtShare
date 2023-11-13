import React, { useEffect, useState } from "react";
import { Grid, Box, Text, Tag } from "@chakra-ui/react";
import axios from "axios";

const History = () => {
  const [history, setHistory] = useState([]);

  const getHistory = () => {
    axios
      .get(`http://localhost:8080/doubts/history`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      {history.map((data, index) => (
        <Box
          key={index}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
          bgColor="white"
        >
          <Tag variant="solid" colorScheme="teal" mb={2}>
            {data.subject}
          </Tag>
          <Tag variant="outline" colorScheme="blue" mb={2}>
            {data.language}
          </Tag>

          <Text fontSize="md" color="gray.700">
            {data.doubt}
          </Text>
        </Box>
      ))}
    </Grid>
  );
};

export default History;
