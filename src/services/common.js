import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isLoading: false,
  },
  reducers: {
    showLoader: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const showLoader = commonSlice.actions.showLoader;
export default commonSlice.reducer;