import React from "react";
import { Stack, Button } from "@chakra-ui/core";

const VoteButtons = ({ upvoteLink, downVoteLink }) => {
  return (
    <Stack direction="row" justfiy="space-around">
      <Button leftIcon="arrow-up" variant="ghost" pl={1} onClick={upvoteLink}>
        Up Vote
      </Button>
      <Button
        leftIcon="arrow-down"
        variant="ghost"
        pl={1}
        onClick={downVoteLink}
      >
        Down Vote
      </Button>
    </Stack>
  );
};

export default VoteButtons;
