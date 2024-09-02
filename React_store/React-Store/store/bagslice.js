import {createSlice} from "@reduxjs/toolkit";



const bagslice = createSlice({


  name:"bag",
  initialState: [],
  reducers:{
  Addtobag:(state,action)=>{

     state.push(action.payload)
  },
  RemovefromBag:(state,action)=>{

    return state.filter(i=>i!==action.payload)
 }}
});

export const bagaction= bagslice.actions;

export default bagslice;