import styled from 'styled-components'

const Glstats = styled.div`
  display:flex;
  flex-direction: column;
  line-height: 1.3;
  font-weight: bold;
`

const Stats = () => {
  return (
    <div id="gstats">
      <div id="statLabels" className="statL">
        <span>Time</span>
        <span>Attack</span>
        <span>Received</span>
        <span>PPS</span>
        <span>APM</span>
      </div>
      <Glstats id="glstats" width="96" height="117">
        <span>18.304</span>
        <span>32</span>
        <span>21</span>
        <span>2.24</span>
        <span>104.9</span>
      </Glstats>
    </div>
  );
};

export default Stats;
