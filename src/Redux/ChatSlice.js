import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    serverColor: "#9e9e9e",
    messageColor: "#fff",
    backgroundColor: "#1c1c1c",
    buttonColor: "#000",
    buttonBackground: "#8e8e8e",
    inputBackground: "#6b6b6b",
    inputColor: "#000",
  },
  reducers: {
    changeServerColor: (state, action) => ({
      ...state,
      serverColor: action.payload.serverColor,
    }),
    changeMessageColor: (state, action) => ({
      ...state,
      messageColor: action.payload.messageColor,
    }),
    changeBackgroundColor: (state, action) => ({
      ...state,
      backgroundColor: action.payload.backgroundColor,
    }),
    changeButtonColor: (state, action) => ({
      ...state,
      buttonColor: action.payload.buttonColor,
    }),
    changeButtonBackground: (state, action) => ({
      ...state,
      buttonBackground: action.payload.buttonBackground,
    }),
    changeInputBackground: (state, action) => ({
      ...state,
      inputBackground: action.payload.inputBackground,
    }),
    changeInputColor: (state, action) => ({
      ...state,
      inputColor: action.payload.inputColor,
    }),
  },
});

export const {
  changeServerColor,
  changeMessageColor,
  changeBackgroundColor,
  changeButtonColor,
  changeButtonBackground,
  changeInputBackground,
  changeInputColor,
} = chatSlice.actions;

export default chatSlice.reducer;
