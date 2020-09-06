import React from "react";
import { Box } from "@chakra-ui/core";
import { AiFillStop } from "react-icons/ai";

const DeleteButton = ({ openAlert }) => (
  <Box
    onClick={openAlert}
    as={AiFillStop}
    position="absolute"
    size="32px"
    top="-12px"
    right="-10px"
    color="red.600"
  />
);

export default DeleteButton;
