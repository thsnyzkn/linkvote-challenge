import React from "react";
import { Stack, Flex, Link, Text } from "@chakra-ui/core";

const TitleLinkPanel = ({ title, url }) => (
  <Stack align="start" justify="center">
    <Flex justifyContent="space-between" w="100%" mb="0">
      <Text fontWeight="bold">{title}</Text>
    </Flex>
    <Link _hover={{ textDecoration: "none" }} color="parimary.100">
      ({url})
    </Link>
  </Stack>
);

export default TitleLinkPanel;
