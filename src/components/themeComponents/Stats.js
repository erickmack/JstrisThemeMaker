import GoBack from "./GoBack";
import NumberInput from "./inputComponents/NumberInput";
import ColorInput from "./inputComponents/ColorInput";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  changeWordsSize,
  changeWordsColor,
  changeNumbersSize,
  changeNumbersColor,
  changeIsLeft,
  changeIsVertical,
} from "../../Redux/StatsSlice";

const StatsOptions = ({ description, btns, selected }) => {
  return (
    <>
      <p>{description}</p>
      <button
        className={`statsOption ${btns[0]}Option ${selected === btns[0] ? "selected" : ""}`}
      >
        {btns[0]}
      </button>
      <button
        className={`statsOption ${btns[1]}Option ${selected === btns[1] ? "selected" : ""}`}
      >
        {btns[1]}
      </button>
    </>
  );
};

const Stats = ({ handleClick }) => {
  const statsState = useSelector((state) => state.stats);
  const [state, setState] = useState(statsState);
  const colorArr = state.numbersColor;
  const [hsl, setHsl] = useState(
    `hsl(${colorArr[0]},${colorArr[1]}%,${colorArr[2]}%)`
  );
  const dispatch = useDispatch();
  function handleChange({ hex, hsl }, type) {
    switch (type) {
      case "wordsColor":
        setState({ ...state, [type]: hex });
        break;
      case "numbersColor":
        setHsl(hsl);
        break;
      default:
        break;
    }
  }
  function handleComplete({ hsl, hex }, type) {
    console.log(hsl);
    switch (type) {
      case "numbersColor":
        let [h, s, l] = [
          Math.trunc(hsl.h - 38),
          (100 + (24.5 - Math.round(hsl.s * 100))) * 100,
          100 + (Math.round(hsl.l * 100) - 60),
        ];
        dispatch(changeNumbersColor({ [type]: [h, s, l] }));
        break;
      case "wordsColor":
        dispatch(changeWordsColor({ [type]: hex }));
        break;
      default:
        break;
    }
  }
  function inputChange(value, type) {
    switch (type) {
      case "wordsSize":
        setState({ ...state, [type]: value });
        dispatch(changeWordsSize({ [type]: value }));
        break;
      case "numbersSize":
        setState({ ...state, [type]: value });
        dispatch(changeNumbersSize({ [type]: value }));
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <GoBack handleClick={handleClick} />
      <NumberInput
        description={"Stats names font size"}
        ID={"wordsSize"}
        value={state.wordsSize}
        inputChange={inputChange}
      />
      <ColorInput
        description={"Stats names color"}
        handleChange={handleChange}
        handleComplete={handleComplete}
        type={"wordsColor"}
        value={state.wordsColor}
      />
      <NumberInput
        description={"Stats numbers font size"}
        ID={"numbersSize"}
        value={state.numbersSize}
        inputChange={inputChange}
      />
      <ColorInput
        description={"Stats numbers color"}
        handleChange={handleChange}
        handleComplete={handleComplete}
        type={"numbersColor"}
        value={hsl}
      />
      <StatsOptions 
       description={'Stats position'}
       btns={['Left','Under']}
       selected={'Under'}
      />
      <StatsOptions 
       description={'Stats alignment'}
       btns={['Vertical','Horizontal']}
       selected={'Horizontal'}
      />
    </div>
  );
};

export default Stats;
