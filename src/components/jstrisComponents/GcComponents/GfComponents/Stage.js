import { useEffect } from "react";
import {useSelector} from 'react-redux'
import styled from "styled-components";

import DrawBlocks from "../../CanvasFunctions/DrawBlocks";
import DrawBgGrid from "../../CanvasFunctions/DrawBgGrid";
import DrawQandHold from "../../CanvasFunctions/DrawQandHold";

const AttackLine = styled.div`
  width: 5px;
  height: 120px;
  background-color: ${props=>props.color};
  z-index: 44;
  float: right;
  position: inherit;
  bottom: ;
  top: 360px;
`;

function Stage() {
  const {skin,ghostSkin,attackColor} = useSelector(state => state.board)
  useEffect(() => {
    DrawBlocks(skin,ghostSkin);
    DrawBgGrid(1, "#bgLayer",24);
    DrawQandHold(skin);
  }, [skin,ghostSkin]);
  return (
    <div id="stage">
      <canvas id="bgLayer" className="layer" width="248" height="480"></canvas>
      <canvas
        id="myCanvas"
        className="layer mainLayer"
        width="248"
        height="480"
        tabIndex="1"
      ></canvas>
      <AttackLine color={attackColor}></AttackLine>
    </div>
  );
}

export default Stage;
