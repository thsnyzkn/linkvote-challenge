import React from "react";
import { Button, useToast } from "@chakra-ui/core";
import Toast from "./Toast";

const SubmitButton = ({ title, isFilled }) => {
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
      onClick={() => {
        if (isFilled) {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 1500,
            position: "top",
            render: () => <Toast title={title} add />,
          });
        }
      }}
    >
      ADD
    </Button>
  );
};
export default SubmitButton;
