import { useSelector } from "react-redux";

import styled from "styled-components";

const Button = styled.button``;

const ButtonBox = styled.div`
  ${Button} {
    background-color: ${(props) => props.bgc};
    border: ${(props) => props.border};
    padding: 0 ${(props) => props.padding}px;
    border-radius: ${(props) => props.radius}px;
    color: ${(props) => props.color};
  }
`;

const Buttons = () => {
  const { backgroundColor, color, border, padding, borderRadius } = useSelector(
    (state) => state.button
  );
  return (
    <ButtonBox
      bgc={backgroundColor}
      border={border}
      padding={padding}
      radius={borderRadius}
      color={color}
      id="buttonsBox"
    >
      <Button>Lobby</Button>
      <Button style={{ margin: "0 4px" }}>Settings</Button>
      <Button>New Game</Button>
    </ButtonBox>
  );
};

export default Buttons;
