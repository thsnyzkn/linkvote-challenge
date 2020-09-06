import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Text,
  Box,
  Heading,
} from "@chakra-ui/core";

const Alert = ({ openAlert, closeAlert, isOpen, removeLink, title }) => {
  const cancelRef = useRef();
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={closeAlert}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader
          fontSize="lg"
          fontWeight="bold"
          bg="black"
          color="white"
        >
          Remove Link
        </AlertDialogHeader>
        <AlertDialogCloseButton fontWeight="800" color="white" />
        <AlertDialogBody>
          <Box textAlign="center">
            {" "}
            <Heading fontSize="lg" color="gray.500">
              Do you want to remove:
            </Heading>{" "}
            <Text fontWeight="bold" fontSize="xl">{title.toUpperCase()}</Text>
          </Box>
        </AlertDialogBody>

        <AlertDialogFooter justifyContent="space-around">
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
            onClick={() => {
              removeLink();
              closeAlert();
            }}
            ml={3}
          >
            OK
          </Button>
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
            ref={cancelRef}
            onClick={() => closeAlert()}
          >
            Cancel
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
