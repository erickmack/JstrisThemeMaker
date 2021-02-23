import styled from "styled-components";

import { useSelector } from "react-redux";

const Glstats = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.numbersSize}px;
  filter: brightness(0.5) sepia(1) ${props=>(`hue-rotate(${props.numbersColor[0]}deg) saturate(${props.numbersColor[1]}%) brightness(${props.numbersColor[2]}%)`)} ;
  line-height: 1.3;
  font-weight: bold;
`;

const StatLabels = styled.div`
  font-size: ${(props) => props.wordsSize}px;
  color: ${(props) => props.wordsColor};
`;

const Stats = () => {
  const {
    wordsSize,
    wordsColor,
    numbersSize,
    numbersColor,
    isLeft,
    isVertical,
  } = useSelector((state) => state.stats);
  return (
    <div
      className={`${isLeft && "leftAligned"} ${isVertical && "verticalAligned"}`}
      id="gstats"
    >
      <StatLabels
        wordsSize={wordsSize}
        wordsColor={wordsColor}
        id="statLabels"
        className="statL"
      >
        <span>Time</span>
        <span>Attack</span>
        <span>Received</span>
        <span>PPS</span>
        <span>APM</span>
      </StatLabels>
      <Glstats
        numbersSize={numbersSize}
        numbersColor={numbersColor}
        id="glstats"
        width="96"
        height="117"
      >
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
