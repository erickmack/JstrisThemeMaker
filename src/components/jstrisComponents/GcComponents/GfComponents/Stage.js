import {useEffect} from 'react'

import DrawBlocks from '../../CanvasFunctions/DrawBlocks'
import DrawBgGrid from '../../CanvasFunctions/DrawBgGrid'
import DrawQandHold from '../../CanvasFunctions/DrawQandHold'

function Stage(){
  useEffect(() => {
    DrawBlocks()
    DrawBgGrid(1,'#bgLayer')
    DrawQandHold()
  }, [])  
  return (
    <div id="stage">
      <canvas
        id="bgLayer"
        class="layer"
        width="248"
        height="480"
      ></canvas>
      <canvas
        id="myCanvas"
        class="layer mainLayer"
        width="248"
        height="480"
        tabindex="1"
      ></canvas>
    </div>
  );
};

export default Stage;
