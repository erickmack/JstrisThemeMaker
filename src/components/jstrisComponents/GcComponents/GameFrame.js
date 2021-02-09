import Lstage from './GfComponents/Lstage'
import Stage from './GfComponents/Stage'
import Rstage from './GfComponents/Rstage'
import Bstage from './GfComponents/Bstage'

import Players from './GfComponents/Players'

const GameFrame = () => {
  return (
    <div id="gameFrame">
      <div id="main">
          <Lstage/>
          <Stage/>
          <Rstage/>
          <Bstage/>
      </div>
      <Players/>
    </div>
  );
};

export default GameFrame;
