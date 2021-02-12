import GoBack from "./GoBack";

import { ChromePicker } from "react-color";
import Sizes from "./inputComponents/Sizes";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  changeColor,
  changeImage,
  changeSize,
} from "../../Redux/BackgroundSlice";

import styled from "styled-components";

const BgLink = styled.input`
  background-color: #f3f3f3;
`;

const Background = ({ handleClick }) => {
  const dispatch = useDispatch();

  const { backgroundColor } = useSelector((state) => state.background);
  const [color, setColor] = useState(backgroundColor);
  const [isPercentage, setIsPercentage] = useState(false);
  const [value,setValue] = useState(100)

  function handleComplete(color) {
    setColor(color);
    dispatch(changeColor({ color }));
  }

  function handleSave() {
    let link = document.getElementById("bgLink").value;
    dispatch(changeImage({ link }));
  }

  function handleSelect(type) {
    try {
      document.querySelector('button.selected').classList.remove('selected')
    } catch {
    }
    let selection = document.querySelector(`#${type}`)
    selection.classList.add('selected')
    switch (type) {
      case "Auto":
        dispatch(changeSize({ size: "auto" }));
        setIsPercentage(false);
        break;
      case "Cover":
        dispatch(changeSize({ size: "cover" }));
        setIsPercentage(false);
        break;
      case "Contain":
        dispatch(changeSize({ size: "contain" }));
        setIsPercentage(false);
        break;
      case "Percentage":
        setIsPercentage(true);
        break;
      default:
        break;
    }
  }

  function handleSlide(event) {
    setValue(event.target.value);
    dispatch(changeSize({ size: `${event.target.value}%` }));
  }

  let sizes = ["Auto", "Cover", "Contain", "Percentage"];

  return (
    <div>
      <GoBack handleClick={handleClick} />
      <p>Change background color</p>
      <ChromePicker
        color={color}
        onChangeComplete={({ hex }) => {
          handleComplete(hex);
        }}
        disableAlpha={true}
        width={140}
      />
      <p>Change background image (optional)</p>
      <BgLink
        id="bgLink"
        type="text"
        placeholder="https://i.imgur.com/YfV0NmQ.jpg"
      ></BgLink>
      <button onClick={handleSave}>Save</button>
      <p>Background size:</p>
      <div className="sizes">
        {sizes.map((size) => (
          <Sizes key={size} name={size} handleSelect={handleSelect} />
        ))}
      </div>
      {isPercentage && (
        <div>
          <input
            onChange={(e) => handleSlide(e)}
            type="range"
            min="1"
            max="100"
            value={value}
          ></input>
        </div>
      )}
    </div>
  );
};

export default Background;
