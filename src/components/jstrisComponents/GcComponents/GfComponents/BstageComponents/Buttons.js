import { useSelector } from "react-redux";

import styled from "styled-components";

const Button = styled.button``;

const ButtonBox = styled.div`
  ${Button} {
    background-color: ${(props) => props.bgc};
    border: ${(props) =>
      props.border === "none" ? "none" : props.border + "px"};
    border-color: ${(props) => props.bcolor};
    padding: ${(props) => props.padding};
    border-radius: ${(props) => props.radius}px;
    color: ${(props) => props.color};
  }
`;

const Buttons = () => {
  const {
    backgroundColor,
    color,
    border,
    padding,
    borderRadius,
    borderColor,
  } = useSelector((state) => state.button);
  let pad = `${padding.split(" ")[0]}px ${padding.split(" ")[1]}px`;
  return (
    <ButtonBox
      bgc={backgroundColor}
      border={border}
      padding={pad}
      radius={borderRadius}
      color={color}
      bcolor={borderColor}
      id="buttonsBox"
    >
      <Button>Lobby</Button>
      <Button style={{ margin: "0 4px" }}>Settings</Button>
      <Button>New Game</Button>
    </ButtonBox>
  );
};

export default Buttons;
