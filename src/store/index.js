import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    appState: appSlice.reducer,
  },
});

export default store;
