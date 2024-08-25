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

export const clearLocalStoarge = () => {
  localStorage.clear();
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
  initialState: {
    ...getInitialState(),
    redirectToLogin: false,
  },
  reducers: {
    logout: (state) => {
      clearLocalStoarge();
      state.user = null;
      state.redirectToLogin = true;
      state.isLoggedIn = false;
    },
    loginPageOpened: (state) => {
      state.redirectToLogin = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        clearLocalStoarge();
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

export const logout = authSlice.actions.logout;
export const loginPageOpened = authSlice.actions.loginPageOpened;
export default authSlice.reducer;