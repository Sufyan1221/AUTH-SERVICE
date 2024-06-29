import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer,persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import tokenSlice from "./tokenSlice";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
 Auth : AuthSlice ,
 Post : PostSlice ,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});
export const persistor = persistStore(store);

