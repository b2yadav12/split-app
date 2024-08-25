import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mutation } from './gql';
import { USER_LOGIN } from "../gql";

const getInitialState = () => {
  const auth = localStorage.getItem('auth');

  if(!auth) {
    return { user: null, isLoggedIn: false };
  }

  const authDtl = JSON.parse(auth);
  delete authDtl.access_token;

  return authDtl;
}

const saveAuth = (authDtl) => {
  localStorage.setItem('auth', JSON.stringify(authDtl));
}

const removeAuth = () => {
  localStorage.removeItem('auth');
}

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (payload) => {
    const data = await mutation(USER_LOGIN, payload);
    return data.login;
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    logout: (state) => {
      removeAuth();
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        removeAuth();
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;

        saveAuth({ ...action.payload, isLoggedIn: true });
      });
  },
});

export default authSlice.reducer;