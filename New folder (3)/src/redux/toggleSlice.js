import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleIndex: 1,
    accessToken: "",
  },
  reducers: {
    getToggleIndex: (state, action) => {
      state.toggleIndex = action.payload;
    },
    getAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      // From here we can take action only at this "counter" state
      // But, as we have taken care of this particular "logout" action
      // in rootReducer, we can use it to CLEAR the complete Redux Store's state
    },
  },
});

export const { getToggleIndex, logout, getAccessToken } = ToggleSlice.actions;

export default ToggleSlice.reducer;
