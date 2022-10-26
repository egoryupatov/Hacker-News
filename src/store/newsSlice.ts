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
  latestNews: number[];
  postInfo: PostInfo;
}

const initialState: NewsState = {
  latestNews: [],
  postInfo: {
    title: "",
    score: 0,
    by: "",
    time: 0,
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getLatestNews: (state, action) => {
      state.latestNews = action.payload.slice(0, 100);
    },
  },
});

export const { getLatestNews } = newsSlice.actions;

export const selectLatestNews = (state: RootState) => state.news.latestNews;

export default newsSlice.reducer;
