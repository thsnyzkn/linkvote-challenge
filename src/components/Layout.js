import React from "react";
import { Flex } from "@chakra-ui/core";

const Layout = ({ children }) => (
  <Flex direction="column" maxW={{ lg: "25%" }} mx="auto" mt="5%" p={4}>
    {children}
  </Flex>
);

export default Layout;
