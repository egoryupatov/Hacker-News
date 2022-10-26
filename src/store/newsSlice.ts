import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface PostInfo {
  title: string;
  score: number;
  by: string;
  time: number;
}

interface NewsState {
  latestNewsID: number[];
  newsDetails: PostInfo[];
}

const initialState: NewsState = {
  latestNewsID: [],
  newsDetails: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getLatestNews: (state, action) => {
      state.latestNewsID = action.payload.slice(0, 10);
    },
    getDetailedNewsInfo: (state, action) => {
      state.newsDetails.push(action.payload);
    },
  },
});

export const { getLatestNews, getDetailedNewsInfo } = newsSlice.actions;

export const selectLatestNews = (state: RootState) => state.news.latestNewsID;
export const selectDetailedNewsInfo = (state: RootState) =>
  state.news.newsDetails;

export default newsSlice.reducer;
