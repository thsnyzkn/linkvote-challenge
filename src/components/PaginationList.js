import React from "react";
import { useDispatch } from "react-redux";
import { Flex, Button, IconButton } from "@chakra-ui/core";

const PaginationList = ({
  sortedList,
  currentPage,
  goPrevPage,
  goClickedPage,
  goNextPage,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      {sortedList.length > 5 ? (
        <Flex mt={5} justifyContent="center">
          <IconButton
            aria-label="Add new post"
            icon="chevron-left"
            variantColor="black"
            variant="ghost"
            _hover={{ fontSize: "lg" }}
            onClick={() => dispatch(goPrevPage())}
            disabled={currentPage === 1}
          />
          {[...Array(Math.ceil(sortedList?.length / 5))].map((_, index) => {
            return (
              <Button
                variantColor="black"
                variant={currentPage === index + 1 ? "outline" : "ghost"}
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
            disabled={currentPage === Math.ceil(sortedList?.length / 5)}
          />
        </Flex>
      ) : null}
    </>
  );
};

export default PaginationList;
