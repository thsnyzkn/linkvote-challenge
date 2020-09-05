import { createSlice } from "@reduxjs/toolkit";

export const linkSlice = createSlice({
  name: "linkList",
  initialState: [
    {
      id: 1,
      points: 6,
      title: "Hacker News",
      url: "https://news.ycombinatior.com",
    },
    { id: 2, points: 4, title: "Quora", url: "https://news.ycombinatior.com" },
    {
      id: 3,
      points: 12,
      title: "Product Hunt",
      url: "https://news.ycombinatior.com",
    },
  ],
  reducers: {
    addLink: (state, action) => {
      state = state.push(action.payload);
    },
    removeLink: (state, action) => {
      delete state.id[action.payload - 1];
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
