import { ChromePicker } from "react-color";

const ColorInput = ({description,handleChange,handleComplete,type,value,obj}) => {
  return (
    <>
      <p>{description}</p>
      <ChromePicker
        onChange={(color) => handleChange(color, type,obj)}
        onChangeComplete={(color) => handleComplete(color, type)}
        color={value}
        disableAlpha={true}
        width={140}
      />
    </>
  );
};

export default ColorInput;
