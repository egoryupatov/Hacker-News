import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { keyBy } from "lodash";

export interface CurrentNewsParentComments {
  by: string;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
  id: number;
}

interface Kids {
  by: string;
  time: number;
}

interface CurrentNews {
  url: string;
  title: string;
  score: number;
  time: number;
  by: string;
  descendants: number;
  kids: Kids[];
}

interface PostInfo {
  title: string;
  score: number;
  by: string;
  time: number;
  id: number;
  descendants: number;
}

interface NewsState {
  newsDetails: PostInfo[];
  currentNews: CurrentNews;
  comments: Record<number, CurrentNewsParentComments>;
  areNewsLoaded: boolean;
  areCommentsLoaded: boolean;
}

const initialState: NewsState = {
  newsDetails: [],
  currentNews: {
    title: "",
    by: "",
    time: 0,
    url: "",
    descendants: 0,
    kids: [],
    score: 0,
  },
  comments: {},
  areNewsLoaded: false,
  areCommentsLoaded: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getDetailedNewsInfo: (state, action) => {
      console.log(action.payload);
      state.newsDetails = action.payload;
    },
    getCurrentNewsInfo: (state, action) => {
      state.currentNews = action.payload;
    },
    getCurrentNewsParentComments: (state, action) => {
      state.comments = { ...state.comments, ...keyBy(action.payload, "id") };
    },
    setAreNewsLoaded: (state, action) => {
      state.areNewsLoaded = action.payload;
    },
    setAreCommentsLoaded: (state, action) => {
      state.areCommentsLoaded = action.payload;
    },
  },
});

export const {
  getDetailedNewsInfo,
  getCurrentNewsInfo,
  getCurrentNewsParentComments,
  setAreNewsLoaded,
  setAreCommentsLoaded,
} = newsSlice.actions;

export const selectCurrentNewsInfo = (state: RootState) =>
  state.news.currentNews;
export const selectDetailedNewsInfo = (state: RootState) =>
  state.news.newsDetails;

export const selectCurrentNewsCommentsArray = (state: RootState) =>
  Object.values(state.news.comments);

export const selectAreNewsLoaded = (state: RootState) =>
  state.news.areNewsLoaded;

export const selectAreCommentsLoaded = (state: RootState) =>
  state.news.areCommentsLoaded;

export default newsSlice.reducer;
