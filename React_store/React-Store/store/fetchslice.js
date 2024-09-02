import { createSlice } from "@reduxjs/toolkit";

const fetchStatus = createSlice({
  name: 'fettch',
  initialState: {
    fetchdone: false,
    cuurentfetching: false,
  },
  reducers: {
    markedfetchdone: (state) => {
      state.fetchdone = true; // Directly modify the draft state
    },
    currentlyfetching: (state) => {
      state.cuurentfetching = true; // Directly modify the draft state
    },
    fetchingfinish: (state) => {
      state.cuurentfetching = false; // Directly modify the draft state
    },
  },
});

export const fetch_status_action = fetchStatus.actions;

export default fetchStatus;
