import React from "react";
import { useDispatch } from "react-redux";
import { Box, Select } from "@chakra-ui/core";

const SortSelection = ({ sortByChoice }) => {
  const dispatch = useDispatch();
  return (
    <Box maxW="50%">
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
    </Box>
  );
};

export default SortSelection;
