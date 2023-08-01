import { configureStore } from "@reduxjs/toolkit";
import tvReducer from "../features/tv/tvslice";
import moviesReducer from "../features/movies/moviesSlice";
import commonReducer from "../features/common/commonSlice";

export const store = configureStore({
  reducer: {
    tv: tvReducer,
    movies: moviesReducer,
    common: commonReducer,
  },
});
