import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    skin: "https://i.imgur.com/LsFmv54.png",
    ghostSkin: "https://i.imgur.com/OvH7LA4.png",
    attackColor: "#ff0000",
    numberColor: "#999",
    sprintColor: "#323232",
    numberSize: 32,
    sprintSize: 14,
  },
  reducers: {
    changeSkin: (state, action) => ({
      ...state,
      skin: action.payload.link,
    }),
    changeGhostSkin: (state, action) => ({
      ...state,
      ghostSkin: action.payload.link,
    }),
    changeAttackColor: (state, action) => ({
      ...state,
      attackColor: action.payload.color,
    }),
    changeNumberColor: (state, action) => ({
      ...state,
      numberColor: action.payload.color,
    }),
    changeSprintColor: (state, action) => ({
      ...state,
      sprintColor: action.payload.color,
    }),
    changeNumberSize: (state,action)=>({
      ...state,
      numberSize: action.payload.size
    }),
    changeSprintSize: (state,action)=>({
      ...state,
      sprintSize: action.payload.size
    })
  },
});

export const {
  changeSkin,
  changeGhostSkin,
  changeAttackColor,
  changeNumberColor,
  changeSprintColor,
  changeNumberSize,
  changeSprintSize
} = boardSlice.actions;
export default boardSlice.reducer;
