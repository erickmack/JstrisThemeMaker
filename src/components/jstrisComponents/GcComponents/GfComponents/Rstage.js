import styled from 'styled-components'

const Lines = styled.div`
  font-family: 'Exo 2'
`

const Rstage = () => {
  return (
    <div id="rstage">
      <canvas id="queueCanvas" width="96" height="360"></canvas>
      <div id="rInfoBox" className="unsel" style={{ display: "block" }}>
        <div id="sprintInfo" style={{ display: "block" }}>
          <Lines id="lrem">40</Lines>
          <div id="sprintText">
            <div id="stLrem" style={{display: 'block'}}>
              lines remaining
            </div>
            F4 to restart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rstage;
