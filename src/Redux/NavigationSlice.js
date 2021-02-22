import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    fontSize: 17,
    backgroundColor: "#375a7f",
    backgroundImage: "",
    backgroundSize: "auto",
    fontColor: "#fff",
    notification: {
      fontSize: 12,
      notifBg: "#ff4927",
      notifColor: "#fff",
    },
    dropdown: {
      ddSel: "#28415b",
      ddBg: "#303030",
      ddColor: "#fff",
      fontSize: 16,
      ddHover: "#428bca",
    },
  },
  reducers: {
    changeFont: (state, action) => ({
      ...state,
      fontSize: action.payload.font,
    }),
    changeBackground: (state, action) => ({
      ...state,
      backgroundColor: action.payload.backgroundColor,
    }),
    changeBackgroundImage: (state, action) => ({
      ...state,
      backgroundImage: action.payload.link,
    }),
    changeBackgroundSize: (state, action) => ({
      ...state,
      backgroundSize: action.payload.size,
    }),
    changeFontColor: (state, action) => ({
      ...state,
      fontColor: action.payload.fontColor,
    }),
    changeNotifSize: (state, action) => ({
      ...state,
      notification: { ...state.notification, fontSize: action.payload.font },
    }),
    changeNotifBg: (state, action) => ({
      ...state,
      notification: {
        ...state.notification,
        notifBg: action.payload.notifBg,
      },
    }),
    changeNotifColor: (state, action) => ({
      ...state,
      notification: {
        ...state.notification,
        notifColor: action.payload.notifColor,
      },
    }),
    changeDropdownSel: (state, action) => ({
      ...state,
      dropdown: {
        ...state.dropdown,
        ddSel: action.payload.ddSel,
      },
    }),
    changeDropdownBackground: (state, action) => ({
      ...state,
      dropdown: {
        ...state.dropdown,
        ddBg: action.payload.ddBg,
      },
    }),
    changeDropdownColor: (state, action) => ({
      ...state,
      dropdown: { ...state.dropdown, ddColor: action.payload.ddColor },
    }),
    changeDropdownHover: (state, action) => ({
      ...state,
      dropdown: {
        ...state.dropdown,
        ddHover: action.payload.ddHover,
      },
    }),
    changeDropdownFont: (state, action) => ({
      ...state,
      dropdown: { ...state.dropdown, fontSize: action.payload.fontSize },
    }),
  },
});

export const {
  changeFont,
  changeBackground,
  changeBackgroundImage,
  changeBackgroundSize,
  changeFontColor,
  changeNotifSize,
  changeNotifBg,
  changeNotifColor,
  changeDropdownSel,
  changeDropdownBackground,
  changeDropdownColor,
  changeDropdownHover,
  changeDropdownFont,
} = navigationSlice.actions;

export default navigationSlice.reducer;
