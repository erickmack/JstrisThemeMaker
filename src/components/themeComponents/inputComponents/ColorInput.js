import { ChromePicker } from "react-color";

const ColorInput = ({description,handleChange,handleComplete,type,value}) => {
  return (
    <>
      <p>{description}</p>
      <ChromePicker
        onChange={(color) => handleChange(color, type)}
        onChangeComplete={(color) => handleComplete(color, type)}
        color={value}
        disableAlpha={true}
        width={140}
      />
    </>
  );
};

export default ColorInput;
