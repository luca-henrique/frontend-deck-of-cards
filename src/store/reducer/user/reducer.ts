import { createReducer } from "@reduxjs/toolkit";
import { addItem, signIn, removeItem } from "./actions";

import { initialState } from "./initial";

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signIn, (state, action) => {
      console.log(action);
    })
    .addCase(addItem, (state, action) => {
      state.lastSearchs.reverse().push(action.payload);
    })
    .addCase(removeItem, (state, action) => {
      state.lastSearchs = state.lastSearchs.filter(
        (item) => item !== action.payload
      );
    });
});
