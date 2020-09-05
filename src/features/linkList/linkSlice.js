import { createSlice } from "@reduxjs/toolkit";

export const linkSlice = createSlice({
  name: "linkList",
  initialState: [],
  reducers: {
    addLink: (state, action) => {
      state = state.push(action.payload);
    },
    removeLink: (state, action) => {
      const indexToBeRemoved = state.findIndex(
        ({ id }) => id === action.payload
      );
      state.splice(indexToBeRemoved, 1);
    },
    downVoteLink: (state, action) => {
      const linkToBeDownvoted = state.find(
        (link) => link.id === action.payload
      );
      if (linkToBeDownvoted) {
        linkToBeDownvoted.points -= 1;
      }
    },
    upvoteLink: (state, action) => {
      const linkToBeUpvoted = state.find((link) => link.id === action.payload);
      if (linkToBeUpvoted) {
        linkToBeUpvoted.points += 1;
      }
    },
  },
});

export const {
  addLink,
  upvoteLink,
  downVoteLink,
  removeLink,
} = linkSlice.actions;

export const selectLinks = (state) => state.linkList;

export default linkSlice.reducer;
