import React, { useReducer } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Link,
  Icon,
  FormControl,
  FormLabel,
  Button,
  useToast,
  Input,
} from "@chakra-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectLinks, addLink } from "../linkList/linkSlice";

const AddLink = () => {
  const toast = useToast();
  const linkList = useSelector(selectLinks);
  console.log("linkList: ", linkList);
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: "",
      url: "",
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, url } = userInput;
    const data = {
      id: linkList.length + 1,
      points: 0,
      title,
      url,
    };
    dispatch(addLink(data));
  };
  console.log("userInput: ", userInput);
  return (
    <>
      <RouterLink to={"/"}>
        <Box mb={4}>
          {" "}
          <Icon name="arrow-back" mr={2} />
          <Link _hover={{ textDecoration: "none" }}>Return to List</Link>
        </Box>
      </RouterLink>
      <form onSubmit={handleSubmit}>
        {" "}
        <FormControl d="flex" flexDirection="column">
          <Box mb={5}>
            <FormLabel htmlFor="title">Link Name:</FormLabel>
            <Input
              type="text"
              value={userInput.title}
              name="title"
              id="title"
              aria-label="link-name"
              placeholder="e.g. Indie Hackers"
              onChange={handleChange}
            />
          </Box>
          <Box mb={5}>
            <FormLabel htmlFor="link-url">Link URL:</FormLabel>
            <Input
              type="text"
              value={userInput.url}
              name="url"
              id="link-url"
              aria-label="email-http-url"
              placeholder="e.g. https://hepsiburada.com"
              onChange={handleChange}
            />
          </Box>
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
                    {userInput.title.toUpperCase()} added.
                  </Box>
                ),
              })
            }
          >
            ADD
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default AddLink;
