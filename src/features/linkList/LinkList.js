import React, { useState } from "react";
import {
  IconButton,
  Heading,
  Stack,
  Flex,
  Box,
  Select,
  Text,
  Link,
  Button,
  PseudoBox,
} from "@chakra-ui/core";
import Alert from "../../components/Alert";
import { AiFillStop } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLinks,
  upvoteLink,
  downVoteLink,
  removeLink,
  sortByChoice,
} from "./linkSlice";
import {
  selectPages,
  goPrevPage,
  goNextPage,
  goClickedPage,
} from "../pagination/paginationSlice";

import { sortLinks, paginateContent } from "../../util/helpers";

const LinksList = ({ props }) => {
  const linkList = useSelector(selectLinks);
  const pagination = useSelector(selectPages);
  const sortedList = paginateContent(
    sortLinks(linkList),
    pagination.currentPage
  );

  const [isOpen, setIsOpen] = useState({});
  const dispatch = useDispatch();
  const openAlert = (id) => {
    setIsOpen({ ...isOpen, [id]: true });
  };
  const closeAlert = (id) => {
    setIsOpen({ ...isOpen, [id]: false });
  };
  return (
    <>
      {/* <SubmissionBox /> */}

      {/*  <Divider borderColor="red.200" mx="-2%" /> */}
      {/* <Box maxW="50%">
        <Select
          placeholder="Order by"
          icon="triangle-down"
          onChange={(event) =>
            dispatch(sortByChoice(event.target.value || "createdDate"))
          }
        >
          <option value="mostVoted">Most Voted(Z→A)</option>
          <option value="lessVoted">Less Voted(A→Z)</option>
        </Select>
      </Box> */}
      {/* {sortedList?.map(({ id, points, title, url }) => {
        return (
          <>
            <PseudoBox
              key={id}
              position="relative"
              d="flex"
              textAlign="center"
              justifyContent="start"
              pt={1}
              pr={2}
              mt={3}
              _hover={{
                bg: "primary.50",
                cursor: "pointer",
                borderRadius: "md",
              }}
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

                  <Link
                    _hover={{ textDecoration: "none" }}
                    color="parimary.100"
                  >
                    ({url})
                  </Link>
                </Stack>
                <Stack direction="row" justfiy="space-around">
                  <Button
                    leftIcon="arrow-up"
                    variant="ghost"
                    pl={1}
                    onClick={() => {
                      dispatch(upvoteLink(id));
                    }}
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
                onClick={() => openAlert(id)}
                as={AiFillStop}
                position="absolute"
                size="32px"
                top="-12px"
                right="-10px"
                color="red.600"
              />
              <Alert
                openAlert={() => openAlert(id)}
                isOpen={isOpen[id]}
                closeAlert={() => closeAlert(id)}
                removeLink={() => dispatch(removeLink(id))}
              />
            </PseudoBox>
          </>
        );
      })} */}
      {linkList?.links?.length > 5 && (
        <Flex mt={5} justifyContent="center">
          <IconButton
            aria-label="Add new post"
            icon="chevron-left"
            variantColor="black"
            variant="ghost"
            _hover={{ fontSize: "lg" }}
            onClick={() => dispatch(goPrevPage())}
          />
          {[...Array(Math.ceil(linkList.links?.length / 5))].map((_, index) => {
            return (
              <Button
                variantColor="black"
                variant={
                  pagination.currentPage === index + 1 ? "outline" : "ghost"
                }
                onClick={() => dispatch(goClickedPage(index + 1))}
              >
                {index + 1}
              </Button>
            );
          })}
          <IconButton
            aria-label="Add new post"
            icon="chevron-right"
            variantColor="black"
            _hover={{ fontSize: "lg" }}
            variant="ghost"
            onClick={() => dispatch(goNextPage())}
          />
        </Flex>
      )}
    </>
  );
};

export default LinksList;
