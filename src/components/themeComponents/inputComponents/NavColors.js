import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChromePicker } from "react-color";

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
const NavColors = ({ toChange, obj, whichColor, type }) => {
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
  const handleComplete = (color, type, which) => {
    switch (type) {
      case "font":
        dispatch(changeFontColor({ [which]: color }));
        break;
      case "bg":
        dispatch(changeBackground({ [which]: color }));
        break;
      case "notifColor":
        dispatch(changeNotifColor({ [which]: color }));
        break;
      case "notifBg":
        dispatch(changeNotifBg({ [which]: color }));
        break;
      case "ddBg":
        dispatch(changeDropdownBackground({ [which]: color }));
        break;
      case "ddSel":
        dispatch(changeDropdownSel({ backgroundColor: color }));
        break;
      case "ddColor":
        dispatch(changeDropdownColor({ [which]: color }));
        break;
      case "ddHover":
        dispatch(changeDropdownHover({ backgroundColor: color }));
        break;
      default:
        break;
    }
  };
  const handleChange = (color, which, obj) => {
    switch (obj) {
      case false:
        setInput({ ...input, [which]: color });
        break;
      default:
        setInput({
          ...input,
          [obj]: { ...input[obj], [which]: color },
        });
        break;
    }
  };
  return (
    <div>
      <div className="inputs">
        <p>Change {toChange} color</p>
        <ChromePicker
          color={obj ? input[obj][whichColor] : input[whichColor]}
          onChange={({ hex }) => handleChange(hex, whichColor, obj || false)}
          onChangeComplete={({ hex }) => {
            handleComplete(hex, type, whichColor);
          }}
          disableAlpha={true}
          width={140}
        />
      </div>
    </div>
  );
};

export default NavColors;
