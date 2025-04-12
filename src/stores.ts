import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "services/homeServices";
import { userApi } from "services/userService";
import friendReducer from "slices/friendSlice";

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    friendReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(homeApi.middleware)
      .concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
