import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
  name: "background",
  initialState: {
    backgroundColor: "#000",
    backgroundImage: "",
    backgroundSize: "",
  },
  reducers: {
    changeColor: (state, action) => ({
      ...state,
      backgroundColor: action.payload.color,
    }),
    changeImage: (state,action)=>({
      ...state,
      backgroundImage: action.payload.link
    }),
    changeSize: (state,action)=>({
      ...state,
      backgroundSize: action.payload.size
    })
  },
});

export const { changeColor,changeImage,changeSize } = backgroundSlice.actions;
export default backgroundSlice.reducer;
