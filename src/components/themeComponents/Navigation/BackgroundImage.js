import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";

import Sizes from "../inputComponents/Sizes";
import {
  changeBackgroundImage,
  changeBackgroundSize,
} from "../../../Redux/NavigationSlice";

const BgLink = styled.input`
  background-color: #f3f3f3;
`;

const BackgroundImage = () => {
  const dispatch = useDispatch();
  const [isPercentage, setIsPercentage] = useState(false);
  const [value, setValue] = useState(100);
  function handleSave() {
    let link = document.getElementById("navImg").value;
    dispatch(changeBackgroundImage({ link }));
  }
  function handleSlide(event) {
    setValue(event.target.value);
    dispatch(changeBackgroundSize({ size: `${event.target.value}%` }));
  }
  function handleSelect(type) {
    try {
      document.querySelector("button.selected").classList.remove("selected");
    } catch {}
    let selection = document.querySelector(`#${type}`);
    selection.classList.add("selected");
    switch (type) {
      case "Auto":
        dispatch(changeBackgroundSize({ size: "auto" }));
        setIsPercentage(false);
        break;
      case "Cover":
        dispatch(changeBackgroundSize({ size: "cover" }));
        setIsPercentage(false);
        break;
      case "Contain":
        dispatch(changeBackgroundSize({ size: "contain" }));
        setIsPercentage(false);
        break;
      case "Percentage":
        setIsPercentage(true);
        break;
      default:
        break;
    }
  }
  const sizes = ["Auto", "Cover", "Contain", "Percentage"];
  return (
    <div>
      <p>Add background image</p>
      <BgLink
        id="navImg"
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

export default BackgroundImage;
