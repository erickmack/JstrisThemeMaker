import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "counter",
  initialState: {
    fontSize: 17,
    backgroundColor: "#375a7f",
    fontColor: "#fff",
    notification: {
      fontSize: 12,
      backgroundColor: "#ff4927",
      fontColor: "#fff",
    },
    dropdown: {
      selectedBackground: "#28415b",
      backgroundColor: "#303030",
      fontColor: "#fff",
      fontSize: 16,
      hoverBackground: "#428bca",
    },
  },
  reducers: {
    changeFont: (state, action) => ({
      ...state,
      fontSize: action.payload.fontColor,
    }),
    changeBackground: (state, action) => ({
      ...state,
      backgroundColor: action.payload.backgroundColor,
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
        backgroundColor: action.payload.backgroundColor,
      },
    }),
    changeNotifColor: (state, action) => ({
      ...state,
      notification: { ...state.notification, fontColor: action.payload.fontColor },
    }),
    changeDropdownSel: (state, action) => ({
      ...state,
      dropdown: { ...state.dropdown, selectedBackground: action.payload.backgroundColor },
    }),
    changeDropdownBackground: (state, action) => ({
      ...state,
      dropdown: { ...state.dropdown, backgroundColor: action.payload.backgroundColor },
    }),
    changeDropdownColor: (state, action) => ({
      ...state,
      dropdown: { ...state.dropdown, fontColor: action.payload.fontColor },
    }),
    changeDropdownHover: (state, action) => ({
      ...state,
      dropdown: { ...state.dropdown, hoverBackground: action.payload.backgroundColor },
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
