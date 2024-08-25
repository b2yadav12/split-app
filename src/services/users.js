import { createAsyncThunk } from "@reduxjs/toolkit";
import { query } from './gql';
import { USERS_LISTS } from "../gql";

export const usersListThunk = createAsyncThunk(
  'users/list',
  async (filter) => {
    const data = await query(USERS_LISTS, filter);
    return data;
  },
)
