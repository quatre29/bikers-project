import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../models/user.model";
import type { RootState } from "../index";

type AuthState = User | null;

const slice = createSlice({
  name: "auth",
  initialState: {
    user: null as AuthState,
  },
  reducers: {
    setAuthUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { setAuthUser } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
