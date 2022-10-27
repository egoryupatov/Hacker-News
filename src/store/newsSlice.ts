import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface CurrentNewsParentComments {
  by: string;
  kids?: number[];
  parent?: number;
  text: string;
  time: number;
  type: string;
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
  latestNewsID: number[];
  newsDetails: PostInfo[];
  currentNews: CurrentNews;
  currentNewsParentComments: CurrentNewsParentComments[];
}

const initialState: NewsState = {
  latestNewsID: [],
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
  currentNewsParentComments: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getLatestNews: (state, action) => {
      state.latestNewsID = action.payload;
    },
    getDetailedNewsInfo: (state, action) => {
      state.newsDetails.push(action.payload);
    },
    getCurrentNewsInfo: (state, action) => {
      state.currentNews = action.payload;
    },
    getCurrentNewsParentComments: (state, action) => {
      state.currentNewsParentComments.push(action.payload);
    },
  },
});

export const {
  getLatestNews,
  getDetailedNewsInfo,
  getCurrentNewsInfo,
  getCurrentNewsParentComments,
} = newsSlice.actions;

export const selectLatestNews = (state: RootState) => state.news.latestNewsID;
export const selectCurrentNewsInfo = (state: RootState) =>
  state.news.currentNews;
export const selectDetailedNewsInfo = (state: RootState) =>
  state.news.newsDetails;
export const selectCurrentNewsParentComments = (state: RootState) =>
  state.news.currentNewsParentComments;

export default newsSlice.reducer;
