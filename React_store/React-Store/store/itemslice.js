import {createSlice} from "@reduxjs/toolkit";



const itemSlice = createSlice({


  name:"item",
  initialState: [],
  reducers:{
  Addinitialitem:(state,action)=>{

     return action.payload;
  }}
});

export const itemaction= itemSlice.actions;

export default itemSlice;