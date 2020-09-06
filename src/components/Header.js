import React from "react";
import { Stack, Flex, Heading, Image, Divider } from "@chakra-ui/core";

/* import Divider from "./Divider"; */
import hepsiburadaLogo from "../assets/images/hepsiburada.jpg";

const Header = () => (
  <Stack px={100}>
    <Flex flexDirecton="column" justifyContent="space-between" align="center">
      <Image src={hepsiburadaLogo} alt="hepsiburada logo" />
      <Heading as="h2">LinkVote Challenge</Heading>
    </Flex>
    <Divider />
  </Stack>
);

export default Header;
