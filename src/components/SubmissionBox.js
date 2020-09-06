import React from "react";
import { Stack, IconButton, Heading } from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";

const SubmissionBox = () => (
  <Stack
    isInline
    spacing={10}
    align="center"
    justifyContent="space-between"
    bg="primary.50"
    py={3}
    pl="3%"
    pr="5%"
    border="1px"
    borderRadius="md"
    borderColor="primary.300"
  >
    <RouterLink to={`/add-link`} mr="5">
      {" "}
      <IconButton
        aria-label="Add new post"
        icon="add"
        height="5rem"
        minW="5rem"
        border="1px"
        fontSize="32px"
        bg="primary.50"
        borderColor="primary.100"
      />
    </RouterLink>

    <Heading as="h3">SUBMIT A LINK</Heading>
  </Stack>
);

export default SubmissionBox;
