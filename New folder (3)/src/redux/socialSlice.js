import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
  name: "social",
  initialState: {
    facebooklinks: "https://www.facebook.com/id",
    twitterlinks: "https://www.twitter.com/id",
    linkedInLinklinks: "https://www.linkedin.com/company/id",
    instalinks: "",
    Stackoverflowlinks: "",
    Youtubelink: "",
    custemlink: "",
    socialImages: "",
  },
  reducers: {
    getFacebooklinks: (state, action) => {
      state.facebooklinks = action.payload;
    },
    getTwitterlinks: (state, action) => {
      state.twitterlinks = action.payload;
    },
    getInstalinks: (state, action) => {
      state.instalinks = action.payload;
    },
    getLinkedInLink: (state, action) => {
      state.linkedInLinklinks = action.payload;
    },
    getStackoverflowlinks: (state, action) => {
      state.Stackoverflowlinks = action.payload;
    },

    getYoutubelink: (state, action) => {
      state.Youtubelink = action.payload;
    },
    getCustemlink: (state, action) => {
      state.custemlink = action.payload;
    },
    getSocialImages: (state, action) => {
      state.socialImages = action.payload;
    },
  },
});

export const {
  getFacebooklinks,
  getYoutubelink,
  getLinkedInLink,
  getTwitterlinks,
  getStackoverflowlinks,
  getInstalinks,
  getCustemlink,
  getSocialImages,
} = socialSlice.actions;

export default socialSlice.reducer;
