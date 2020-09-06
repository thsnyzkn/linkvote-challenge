import React from "react";
import { Box, Heading, Text } from "@chakra-ui/core";

const ScoreBox = ({ points }) => (
  <Box
    bg="primary.100"
    p={4}
    mb={3}
    border="1px"
    borderColor="primary.200"
    borderRadius="md"
  >
    <Heading
      fontWeight="bolder"
      fontSize="2.5rem"
      lineHeight="1.75rem"
      data-testid="points-value"
    >
      {points}
    </Heading>
    <Text>POINTS</Text>
  </Box>
);

export default ScoreBox;
