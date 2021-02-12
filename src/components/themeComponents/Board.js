import GoBack from "./GoBack";
import { ChromePicker } from "react-color";

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
    if(type==='numberSize'){
        dispatch(changeNumberSize({size:color}))
    }else if(type==='sprintSize'){
        dispatch(changeSprintSize({size:color}))
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
      <p>Attack line color</p>
      <ChromePicker
        onChange={(color) => handleChange(color, attack)}
        onChangeComplete={(color) => handleComplete(color, attack)}
        color={state[attack]}
        disableAlpha={true}
        width={140}
      />
      <p>Lines left font size</p>
      <input
        type="number"
        value={state.numberSize}
        onChange={(e) => handleChange(e.target.value,'numberSize')}
      />
      <p>Lines left color</p>
      <ChromePicker
        onChange={(color) => handleChange(color, number)}
        onChangeComplete={(color) => handleComplete(color, number)}
        color={state[number]}
        disableAlpha={true}
        width={140}
      />
      <p>Info text font size</p>
      <input
        type="number"
        value={state.sprintSize}
        onChange={(e) => handleChange(e.target.value,"sprintSize")}
      />
      <p>Info text color</p>
      <ChromePicker
        onChange={(color) => handleChange(color, sprint)}
        onChangeComplete={(color) => handleComplete(color, sprint)}
        color={state[sprint]}
        disableAlpha={true}
        width={140}
      />
    </div>
  );
};

export default Board;
