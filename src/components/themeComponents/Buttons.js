import GoBack from "./GoBack";

import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  changeBackgroundColor,
  changeColor,
  changeBorder,
  changeBorderColor,
  changePadding,
  changeBorderRadius,
} from "../../Redux/ButtonsSlice";

const Buttons = ({ handleClick }) => {
  const dispatch = useDispatch();

  const button = useSelector((state) => state.button);
  const [state, setState] = useState(button);
  const [isSolid, setSolid] = useState(true);
  const [width, setWidth] = useState(+state.border.split(" ")[1]);
  const [paddingTB, setPaddingTB] = useState(+state.padding.split(" ")[0]);
  const [paddingLR, setPaddingLR] = useState(+state.padding.split(" ")[1]);
  function handleComplete(color, type) {
    switch (type) {
      case "bgc":
        dispatch(changeBackgroundColor({ color }));
        break;
      case "font":
        dispatch(changeColor({ color }));
        break;
      case "border":
        dispatch(changeBorderColor({ color }));
        break;
      default:
        break;
    }
  }

  function handleChange(color, type) {
    setState({ ...state, [type]: color });
  }

  function inputChange(value, type) {
    setState({ ...state, [type]: value });
    let ptb;
    let plr;
    if (type.indexOf("padding") !== -1) {
      ptb = document.querySelector('#paddingTB').value;
      plr = document.querySelector('#paddingLR').value;
    }
    if (type === "paddingTB") {
      setPaddingTB(value);
      dispatch(changePadding({ padding: `${value} ${plr}` }));
    } else if (type === "paddingLR") {
      setPaddingLR(value);
      dispatch(changePadding({ padding: `${ptb} ${value}` }));
    } else if (type === "borderRadius") {
      dispatch(changeBorderRadius({ radius: value }));
    }
  }

  function widthChange(value) {
    setWidth(value);
    let widthDp = `solid ${value}`;
    dispatch(changeBorder({ border: widthDp }));
  }

  function handleSelect(target, type) {
    document
      .querySelector(".borderSelect.selected")
      .classList.remove("selected");
    target.classList.add("selected");
    if (type === "none") {
      dispatch(changeBorder({ border: "none" }));
      setSolid(false);
    } else {
      dispatch(changeBorder({ border: "" }));
      setSolid(true);
    }
  }

  return (
    <div>
      <GoBack handleClick={handleClick} />
      <p>Background color</p>
      <ChromePicker
        color={state.backgroundColor}
        onChangeComplete={({ hex }) => {
          handleComplete(hex, "bgc");
        }}
        onChange={({ hex }) => {
          handleChange(hex, "backgroundColor");
        }}
        disableAlpha={true}
        width={140}
      />
      <p>Font color</p>
      <ChromePicker
        color={state.color}
        onChangeComplete={({ hex }) => {
          handleComplete(hex, "font");
        }}
        onChange={({ hex }) => {
          handleChange(hex, "color");
        }}
        disableAlpha={true}
        width={140}
      />
      <p>Padding top/bottom</p>
      <input
        type="number"
        id="paddingTB"
        value={paddingTB}
        min="0"
        max="40"
        onChange={(e) => inputChange(e.target.value, "paddingTB")}
      />
      <p>Padding left/right</p>
      <input
        type="number"
        id="paddingLR"
        value={paddingLR}
        min="0"
        max="40"
        onChange={(e) => inputChange(e.target.value, "paddingLR")}
      />
      <p>Round corners</p>
      <input
        type="number"
        value={state.borderRadius}
        min="0"
        max="20"
        onChange={(e) => inputChange(e.target.value, "borderRadius")}
      />
      <p>Border</p>
      <button
        className="borderSelect"
        onClick={(e) => handleSelect(e.target, "none")}
      >
        None
      </button>
      <button
        className="borderSelect selected"
        onClick={(e) => handleSelect(e.target, "solid")}
      >
        Solid
      </button>
      {isSolid && (
        <div>
          <p>Border width:</p>
          <input
            type="number"
            value={width}
            onChange={(e) => widthChange(e.target.value, "borderColor")}
          />
          <p>Border color:</p>
          <ChromePicker
            color={state.borderColor}
            onChangeComplete={({ hex }) => {
              handleComplete(hex, "border");
            }}
            onChange={({ hex }) => {
              handleChange(hex, "borderColor");
            }}
            disableAlpha={true}
            width={140}
          />
        </div>
      )}
    </div>
  );
};

export default Buttons;
