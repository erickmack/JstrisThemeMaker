import GoBack from "./GoBack";
import NumberInput from "./inputComponents/NumberInput";
import ColorInput from "./inputComponents/ColorInput";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  changeSkin,
  changeGhostSkin,
  changeAttackColor,
  changeNumberColor,
  changeSprintColor,
  changeNumberSize,
  changeSprintSize,
} from "../../Redux/BoardSlice";

const Board = ({ handleClick }) => {
  const board = useSelector((state) => state.board);
  const [state, setState] = useState(board);

  const dispatch = useDispatch();
  function handleSave(type, target) {
    let link = document.querySelector(`#${target}`).value;
    if (type === "skin") {
      dispatch(changeSkin({ link }));
    } else {
      dispatch(changeGhostSkin({ link }));
    }
  }
  function handleComplete(color, type) {
    switch (type) {
      case "numberColor":
        dispatch(changeNumberColor({ color: color.hex }));
        break;
      case "attackColor":
        dispatch(changeAttackColor({ color: color.hex }));
        break;
      case "sprintColor":
        dispatch(changeSprintColor({ color: color.hex }));
        break;
      default:
        break;
    }
  }

  function handleChange(color, type) {
    setState({ ...state, [type]: color });
    if (type === "numberSize") {
      dispatch(changeNumberSize({ size: color }));
    } else if (type === "sprintSize") {
      dispatch(changeSprintSize({ size: color }));
    }
  }

  const [attack, number, sprint] = [
    "attackColor",
    "numberColor",
    "sprintColor",
  ];

  return (
    <div>
      <GoBack handleClick={handleClick} />
      <p>Block skin</p>
      <input
        id="skinLink"
        type="text"
        placeholder="https://s.jezevec10.com/res/b/20/51.png"
      ></input>
      <button onClick={(e) => handleSave("skin", "skinLink")}>Save</button>
      <p>Ghost skin</p>
      <input
        id="ghostLink"
        type="text"
        placeholder="https://s.jezevec10.com/res/b/20/51.png"
      ></input>
      <button onClick={(e) => handleSave("ghost", "ghostLink")}>Save</button>
      <ColorInput
        description={"Attack line color"}
        handleChange={handleChange}
        handleComplete={handleComplete}
        type={attack}
        value={state[attack]}
      />
      <NumberInput
        description={"Lines left font size"}
        ID={"numberSize"}
        value={state.numberSize}
        inputChange={handleChange}
      />
      <ColorInput
        description={"Lines left color"}
        handleChange={handleChange}
        handleComplete={handleComplete}
        type={number}
        value={state[number]}
      />
      <NumberInput
        description={"Info text font size"}
        id={"sprintSize"}
        value={state.sprintSize}
        inputChange={handleChange}
      />
      <ColorInput
        description={"Info text color"}
        handleChange={handleChange}
        handleComplete={handleComplete}
        type={sprint}
        value={state[sprint]}
      />
    </div>
  );
};

export default Board;
