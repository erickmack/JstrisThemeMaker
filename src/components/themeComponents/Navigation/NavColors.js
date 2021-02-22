import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ColorInput from "../inputComponents/ColorInput";

import {
  changeBackground,
  changeFontColor,
  changeNotifColor,
  changeNotifBg,
  changeDropdownBackground,
  changeDropdownColor,
  changeDropdownHover,
  changeDropdownSel,
} from "../../../Redux/NavigationSlice";
const NavColors = ({ toChange, obj, type }) => {
  const dispatch = useDispatch();
  const { backgroundColor, fontColor, notification, dropdown } = useSelector(
    (state) => state.navigation
  );
  const [input, setInput] = useState({
    backgroundColor,
    fontColor,
    notification,
    dropdown,
  });
  const handleComplete = ({ hex }, type) => {
    switch (type) {
      case "fontColor":
        dispatch(changeFontColor({ [type]: hex }));
        break;
      case "backgroundColor":
        dispatch(changeBackground({ [type]: hex }));
        break;
      case "notifColor":
        dispatch(changeNotifColor({ [type]: hex }));
        break;
      case "notifBg":
        dispatch(changeNotifBg({ [type]: hex }));
        break;
      case "ddBg":
        dispatch(changeDropdownBackground({ [type]: hex }));
        break;
      case "ddSel":
        dispatch(changeDropdownSel({ [type]: hex }));
        break;
      case "ddColor":
        dispatch(changeDropdownColor({ [type]: hex }));
        break;
      case "ddHover":
        dispatch(changeDropdownHover({ [type]: hex }));
        break;
      default:
        break;
    }
  };
  const handleChange = ({ hex }, type, obj) => {
    switch (obj) {
      case false:
        setInput({ ...input, [type]: hex });
        break;
      default:
        setInput({
          ...input,
          [obj]: { ...input[obj], [type]: hex },
        });
        break;
    }
  };
  return (
    <ColorInput
      description={`Change ${toChange} color`}
      handleChange={handleChange}
      handleComplete={handleComplete}
      type={type}
      obj={obj || false}
      value={obj ? input[obj][type] : input[type]}
    />
  );
};

export default NavColors;
