import React from "react";

import { Button } from "@chakra-ui/core";

const AlertButton = ({ handleClick, ref, title }) => (
  <Button
    minW="8rem"
    height="2.5rem"
    fontWeight="800"
    bg="black"
    color="white"
    _hover={{ bg: "black" }}
    _active={{ bg: "black" }}
    variant="solid"
    borderRadius="50px"
    ref={ref}
    onClick={handleClick}
  >
    {title.toUpperCase()}
  </Button>
);

export default AlertButton;
