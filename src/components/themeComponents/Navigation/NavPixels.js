import {useDispatch,useSelector} from "react-redux";
import {useState} from 'react'

import {
  changeFont,
  changeNotifSize,
  changeDropdownFont,
} from "../../../Redux/NavigationSlice";

const Pixels = ({obj,type}) => {
  const dispatch = useDispatch();
  const {
    fontSize,
    notification,
    dropdown,
  } = useSelector((state) => state.navigation);
  const [input, setInput] = useState({
    fontSize,
    notification,
    dropdown,
  });
  const handleChange = (event, type) => {
    let value = event.target.value;
    switch (type) {
      case "fontSize":
        setInput({ ...input, fontSize: value });
        dispatch(changeFont({ font: value }));
        break;
      case "notifFontSize":
        setInput({
          ...input,
          notification: { ...input.notification, fontSize: value },
        });
        dispatch(changeNotifSize({ font: value }));
        break;
      case "ddFontSize":
        setInput({
          ...input,
          dropdown: { ...input.dropdown, fontSize: value },
        });
        dispatch(changeDropdownFont({ fontSize: value }));
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="inputs">
        <p>Change font size</p>
        <div className="flex">
          <input
            type="number"
            value={obj?input[obj].fontSize:input.fontSize}
            onChange={(e) => {
              handleChange(e, type);
            }}
          />
          <span>px</span>
        </div>
      </div>
    </div>
  );
};

export default Pixels;
