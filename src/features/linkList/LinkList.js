import React, { useRef } from "react";
import {
  IconButton,
  Heading,
  Stack,
  Flex,
  Divider,
  Box,
  Select,
  Text,
  Link,
  Button,
  PseudoBox,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/core";
import { AiFillStop } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLinks, upvoteLink, downVoteLink, removeLink } from "./linkSlice";

const LinksList = ({ props }) => {
  const linkList = useSelector(selectLinks);
  console.log("linkList: ", linkList);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const cancelRef = useRef();
  const dispatch = useDispatch();
  return (
    <>
      <Stack
        isInline
        spacing={10}
        align="center"
        justifyContent="space-around"
        bg="primary.50"
        py={3}
        border="1px"
        borderRadius="md"
        borderColor="primary.300"
      >
        <Button onClick={() => dispatch(removeLink(3))}>REMOVE</Button>
        <RouterLink to={`/add-link`} mr="5">
          {" "}
          <IconButton
            aria-label="Add new post"
            icon="add"
            height="5rem"
            minW="5rem"
            border="1px"
            bg="primary.50"
            borderColor="primary.100"
          />
        </RouterLink>

        <Heading as="h3">SUBMIT A LINK</Heading>
      </Stack>

      <Divider borderColor="red.200" mx="-2%" />
      <Box maxW="50%">
        <Select placeholder="Order by" icon="triangle-down">
          <option value="option1">Most Voted(Z→A)</option>
          <option value="option2">Most Voted(A→Z)</option>
        </Select>
      </Box>
      {linkList?.map(({ id, points, title, url }, index) => {
        return (
          <PseudoBox
            position="relative"
            d="flex"
            textAlign="center"
            justifyContent="start"
            pt={1}
            pr={2}
            mt={3}
            _hover={{ bg: "primary.50", cursor: "pointer", borderRadius: "md" }}
          >
            <Box
              bg="primary.100"
              p={4}
              mb={3}
              border="1px"
              borderColor="primary.200"
              borderRadius="md"
            >
              <Heading
                fontWeight="bolder"
                fontSize="2.5rem"
                lineHeight="1.75rem"
              >
                {points}
              </Heading>
              <Text>POINTS</Text>
            </Box>

            <Stack ml={4} pl={1}>
              <Stack align="start" justify="center">
                <Flex justifyContent="space-between" w="100%" mb="0">
                  <Text fontWeight="bold">{title}</Text>
                </Flex>

                <Link _hover={{ textDecoration: "none" }} color="parimary.100">
                  ({url})
                </Link>
              </Stack>
              <Stack direction="row" justfiy="space-around">
                <Button
                  leftIcon="arrow-up"
                  variant="ghost"
                  pl={1}
                  onClick={() => dispatch(upvoteLink(id))}
                >
                  Up Vote
                </Button>
                <Button
                  leftIcon="arrow-down"
                  variant="ghost"
                  pl={1}
                  onClick={() => dispatch(downVoteLink(id))}
                >
                  Down Vote
                </Button>
              </Stack>
            </Stack>
            <Box
              onClick={onOpen}
              as={AiFillStop}
              position="absolute"
              size="32px"
              top="-12px"
              right="-10px"
              color="red.600"
            />
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
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
                  Are you sure? You can't undo this action afterwards.
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
                      dispatch(removeLink(id));
                      onClose();
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
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </PseudoBox>
        );
      })}
    </>
  );
};

export default LinksList;
