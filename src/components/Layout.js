import React from "react";
import { Flex } from "@chakra-ui/core";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <Flex direction="column" maxW={{ lg: "40%" }} mx="auto" p={4}>
      {children}
    </Flex>
  </>
);

export default Layout;
