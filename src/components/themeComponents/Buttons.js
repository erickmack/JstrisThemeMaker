import GoBack from "./GoBack";
import NumberInput from "./inputComponents/NumberInput";
import ColorInput from "./inputComponents/ColorInput";

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
  function handleComplete({ hex }, type) {
    switch (type) {
      case "backgroundColor":
        dispatch(changeBackgroundColor({ color: hex }));
        break;
      case "color":
        dispatch(changeColor({ color: hex }));
        break;
      case "borderColor":
        dispatch(changeBorderColor({ color: hex }));
        break;
      default:
        break;
    }
  }

  function handleChange({ hex }, type) {
    setState({ ...state, [type]: hex });
  }

  function inputChange(value, type) {
    setState({ ...state, [type]: value });
    let ptb;
    let plr;
    if (type.indexOf("padding") !== -1) {
      ptb = document.querySelector("#paddingTB").value;
      plr = document.querySelector("#paddingLR").value;
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
      <ColorInput
        description={"Background color"}
        value={state.backgroundColor}
        handleChange={handleChange}
        handleComplete={handleComplete}
        type={"backgroundColor"}
      />
      <ColorInput
        description={"Font color"}
        value={state.color}
        handleChange={handleChange}
        handleComplete={handleComplete}
        type={"color"}
      />
      <NumberInput
        description={"Padding top/bottom"}
        ID={"paddingTB"}
        value={paddingTB}
        inputChange={inputChange}
      />
      <NumberInput
        description={"Padding left/Right"}
        ID={"paddingLR"}
        value={paddingLR}
        inputChange={inputChange}
      />
      <NumberInput
        description={"Round corners"}
        ID={"borderRadius"}
        value={state.borderRadius}
        inputChange={inputChange}
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
          <ColorInput
            description={"Border color"}
            value={state.borderColor}
            handleChange={handleChange}
            handleComplete={handleComplete}
            type={"borderColor"}
          />
        </div>
      )}
    </div>
  );
};

export default Buttons;
