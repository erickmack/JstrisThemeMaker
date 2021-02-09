const Stats = () => {
  return (
    <div id="gstats">
      <div id="statLabels" className="statL">
        <span>Time</span>
        <span>Attack</span>
        <span>Finesse</span>
        <span>PPS</span>
        <span>KPP</span>
        <span>#</span>
      </div>
      <canvas id="glstats" width='96' height='117'></canvas>
    </div>
  );
};

export default Stats;
