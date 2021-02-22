import GoBack from "./GoBack";
import ColorInput from "./inputComponents/ColorInput";
import ImageInput from "./inputComponents/ImageInput";
import BgSize from "./inputComponents/BgSize";

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
  const [value, setValue] = useState(100);

  function handleComplete({ hex }) {
    dispatch(changeColor({ color: hex }));
  }

  function handleChange({ hex }) {
    setColor(hex);
  }

  function handleSave() {
    let link = document.getElementById("bgLink").value;
    dispatch(changeImage({ link }));
  }

  function handleSelect(type) {
    try {
      document.querySelector("button.selected").classList.remove("selected");
    } catch {}
    let selection = document.querySelector(`#${type}`);
    selection.classList.add("selected");
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
  return (
    <div>
      <GoBack handleClick={handleClick} />
      <ColorInput
        description={"Change background color"}
        value={color}
        handleChange={handleChange}
        type={"bgColor"}
        handleComplete={handleComplete}
      />
      <ImageInput
        description={"Add background image"}
        ID={"bgLink"}
        placeholder={"https://i.imgur.com/YfV0NmQ.jpg"}
        handleSave={handleSave}
      />
      <BgSize
        handleSelect={handleSelect}
        isPercentage={isPercentage}
        handleSlide={handleSlide}
        value={value}
      />
    </div>
  );
};

export default Background;
