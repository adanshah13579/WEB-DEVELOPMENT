import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemslice";
import fetchStatus from "./fetchslice";
import bagslice from "./bagslice";

const reactstore = configureStore({
  reducer: {
    item: itemSlice.reducer,
    fettch:fetchStatus.reducer,
    bagitm:bagslice.reducer,
  },
  
});

export default reactstore;
