import GoBack from "./GoBack";
import NumberInput from "./inputComponents/NumberInput";
import ColorInput from "./inputComponents/ColorInput";
import ImageInput from "./inputComponents/ImageInput"

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
      <ImageInput
        description={'Block skin'}
        ID={'skinLink'}
        type={'skin'}
        placeholder={'https://i.imgur.com/6EqjUdN.png'}
        handleSave={handleSave}
      />
      <ImageInput
        description={'Ghost skin'}
        ID={'ghostLink'}
        placeholder={'https://i.imgur.com/OvH7LA4.png'}
        handleSave={handleSave}
      />
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
