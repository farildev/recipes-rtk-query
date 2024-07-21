import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "./services/recipeApi";

const store = configureStore({
  reducer : {
    [recipeApi.reducerPath] : recipeApi.reducer
  },
  middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(recipeApi.middleware)
});

export default store