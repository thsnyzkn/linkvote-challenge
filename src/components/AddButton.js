import React from "react";
import { Button, Box, useToast } from "@chakra-ui/core";

const SubmitButton = ({ title }) => {
  const toast = useToast();
  return (
    <Button
      type="submit"
      alignSelf="flex-end"
      minW="8rem"
      height="2.5rem"
      fontWeight="800"
      bg="black"
      color="white"
      _hover={{ bg: "black" }}
      _active={{ bg: "black" }}
      variant="solid"
      borderRadius="50px"
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 1500,
          position: "top",
          render: () => (
            <Box
              mt={13}
              color="green.500"
              px={30}
              py={5}
              bg="green.100"
              border="1px"
              w="100%"
              borderColor="green.500"
              borderRadius="md"
            >
              {title.toUpperCase()} added.
            </Box>
          ),
        })
      }
    >
      ADD
    </Button>
  );
};
export default SubmitButton;
