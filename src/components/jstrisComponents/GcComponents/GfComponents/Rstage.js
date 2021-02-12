import {useSelector} from 'react-redux'

import styled from 'styled-components'

const Lines = styled.div`
  font-family: 'Exo 2';
  color: ${props=>props.color};
  font-size: ${props=>props.size}px;
  text-align: center;
  margin-top: 15px;
`

const Sprint = styled.div`
  color: ${props=>props.color};
  font-size: ${props=>props.size}px;
  text-align: center;
`

const Rstage = () => {
  const {numberColor,sprintColor,numberSize,sprintSize} = useSelector(state => state.board)
  return (
    <div id="rstage">
      <canvas id="queueCanvas" width="96" height="360"></canvas>
      <div id="rInfoBox" className="unsel" style={{ display: "block" }}>
        <div id="sprintInfo" style={{ display: "block" }}>
          <Lines color={numberColor} size={numberSize} id="lrem">40</Lines>
          <Sprint color={sprintColor} size={sprintSize} id="sprintText">
            <div id="stLrem" style={{display: 'block'}}>
              lines remaining
            </div>
            F4 to restart
          </Sprint>
        </div>
      </div>
    </div>
  );
};

export default Rstage;
