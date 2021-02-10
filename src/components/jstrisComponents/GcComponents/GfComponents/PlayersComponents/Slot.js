import { useEffect } from "react";
import styled from "styled-components";

import DrawBgGrid from "../../../CanvasFunctions/DrawBgGrid";

const Canvas = styled.canvas`
  grid-column: 1;
  grid-row: 1;
`;

const AttackLine = styled.div`
  width: 5px;
  height: 120px;
  background-color: red;
  grid-column: 2;
  grid-row: 1;
  margin-top: 322px;
`;

const Slot = () => {
  useEffect(() => {
    DrawBgGrid(1, ".bgLayer");
    console.log("here");
  }, []);
  return (
    <>
      <div
        style={{ height: "100%", display: "grid", justifyContent: "center" }}
      >
        <Canvas className="bgLayer" width="229" height="440"></Canvas>
        <Canvas className="mainLayer" width="229" height="440"></Canvas>
        <AttackLine />
      </div>
    </>
  );
};

export default Slot;
