import React from "react";
import { Stack, Flex, Image, Divider, Text } from "@chakra-ui/core";

import hepsiburadaLogo from "../assets/images/hepsiburada.png";

const Header = () => (
  <Stack px={100} mt={10}>
    <Flex flexDirecton="column" justifyContent="space-between" align="center">
      <Image src={hepsiburadaLogo} alt="hepsiburada logo" />
      <Flex>
        <Text fontWeight="bold">Link</Text>
        <Text>VOTE</Text>
        <Text ml={20}>Challenge</Text>
      </Flex>
    </Flex>
    <Divider />
  </Stack>
);

export default Header;
