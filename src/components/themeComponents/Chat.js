import GoBack from "./GoBack";
import ColorInput from "./inputComponents/ColorInput";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeServerColor,
  changeMessageColor,
  changeBackgroundColor,
  changeButtonColor,
  changeButtonBackground,
  changeInputBackground,
  changeInputColor,
} from "../../Redux/ChatSlice";

const Chat = ({ handleClick }) => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);
  const [state, setstate] = useState(chat);

  const descArr = [
    "Server message",
    "User message",
    "Chat background",
    "Button text",
    "Button background",
    "Input background",
    "Input message",
  ];

  function handleChange({ hex }, type) {
    setstate({ ...state, [type]: hex });
  }

  function handleComplete({ hex }, type) {
    switch (type) {
      case "serverColor":
        dispatch(changeServerColor({ serverColor: hex }));
        break;
      case "messageColor":
        dispatch(changeMessageColor({ messageColor: hex }));
        break;
      case "backgroundColor":
        dispatch(changeBackgroundColor({ backgroundColor: hex }));
        break;
      case "buttonColor":
        dispatch(changeButtonColor({ buttonColor: hex }));
        break;
      case "buttonBackground":
        dispatch(changeButtonBackground({ buttonBackground: hex }));
        break;
      case "inputBackground":
        dispatch(changeInputBackground({ inputBackground: hex }));
        break;
      case "inputColor":
        dispatch(changeInputColor({ inputColor: hex }));
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <GoBack handleClick={handleClick} />
      {Object.keys(state).map((key, index) => (
        <ColorInput
          description={`${descArr[index]} color`}
          handleChange={handleChange}
          handleComplete={handleComplete}
          type={key}
          value={state[key]}
          key={key}
        />
      ))}
    </div>
  );
};

export default Chat;
