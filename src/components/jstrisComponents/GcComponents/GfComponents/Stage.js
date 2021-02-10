import { useEffect } from "react";
import styled from "styled-components";

import DrawBlocks from "../../CanvasFunctions/DrawBlocks";
import DrawBgGrid from "../../CanvasFunctions/DrawBgGrid";
import DrawQandHold from "../../CanvasFunctions/DrawQandHold";

const AttackLine = styled.div`
  width: 5px;
  height: 120px;
  background-color: red;
  z-index: 44;
  float: right;
  position: inherit;
  bottom: ;
  top: 360px;
`;

function Stage() {
  useEffect(() => {
    DrawBlocks();
    DrawBgGrid(1, "#bgLayer");
    DrawQandHold();
  }, []);
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
      <AttackLine></AttackLine>
    </div>
  );
}

export default Stage;
