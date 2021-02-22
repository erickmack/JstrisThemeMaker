import { useDispatch } from "react-redux";
import { useState } from "react";

import ImageInput from "../inputComponents/ImageInput"
import BgSize from "../inputComponents/BgSize"
import {
  changeBackgroundImage,
  changeBackgroundSize,
} from "../../../Redux/NavigationSlice";

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
  return (
    <div>
      <ImageInput
        description={'Add background image'}
        ID={"navImg"}
        placeholder={"https://i.imgur.com/UddMv3X.png"}
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

export default BackgroundImage;
