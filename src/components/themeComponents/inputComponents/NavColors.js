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
const NavColors = ({toChange,obj,whichColor,type}) => {
  const dispatch = useDispatch();
  const {
    backgroundColor,
    fontColor,
    notification,
    dropdown,
  } = useSelector((state) => state.navigation);
  const [input, setInput] = useState({
    backgroundColor,
    fontColor,
    notification,
    dropdown,
  });
  const handleComplete = (color, type,which) => {
    switch (type) {
      case "font":
        setInput({ ...input, [which]: color });
        setTimeout(() => {
          dispatch(changeFontColor({ [which]: color }));
        }, 100);
        break;
      case "bg":
        setInput({ ...input, [which]: color });
        setTimeout(() => {
          dispatch(changeBackground({ [which]: color }));
        }, 100);
        break;
      case "notifColor":
        setInput({
          ...input,
          notification: { ...input.notification, [which]: color },
        });
        setTimeout(() => {
          dispatch(changeNotifColor({ [which]: color }));
        }, 100);
        break;
      case "notifBg":
        setInput({
          ...input,
          notification: { ...input.notification, [which]: color },
        });
        setTimeout(() => {
          dispatch(changeNotifBg({ [which]: color }));
        }, 100);
        break;
        case "ddBg":
        setInput({
          ...input,
          dropdown: { ...input.dropdown, [which]: color },
        });
        setTimeout(() => {
          dispatch(changeDropdownBackground({ [which]: color }));
        }, 100);
        break;
        case "ddSel":
        setInput({
          ...input,
          dropdown: { ...input.dropdown, [which]: color },
        });
        setTimeout(() => {
          dispatch(changeDropdownSel({ backgroundColor: color }));
        }, 100);
        break;
        case "ddColor":
        setInput({
          ...input,
          dropdown: { ...input.dropdown, [which]: color },
        });
        setTimeout(() => {
          dispatch(changeDropdownColor({ [which]: color }));
        }, 100);
        break;
        case "ddHover":
        setInput({
          ...input,
          dropdown: { ...input.dropdown, [which]: color },
        });
        setTimeout(() => {
          dispatch(changeDropdownHover({ backgroundColor: color }));
        }, 100);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="inputs">
        <p>Change {toChange} color</p>
        <ChromePicker
          color={obj?input[obj][whichColor]:input[whichColor]}
          onChangeComplete={({ hex }) => {
            handleComplete(hex, type,whichColor);
          }}
          disableAlpha={true}
          width={140}
        />
      </div>
    </div>
  );
};

export default NavColors;
