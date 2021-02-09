const Rstage = () => {
  return (
    <div id="rstage">
      <canvas id="queueCanvas" width="96" height="360"></canvas>
      <div id="rInfoBox" className="unsel" style={{display: 'block'}}>
        <div id="practiceMenu" style={{display: 'block'}}>
          <b>Practice:</b>
          <div id="practice-last" className="prMenuItem">
            Sprint<div className="prKey">F4</div>
          </div>
          <div id="ruleSel1" className="prMenuItem cCom">
            <span>Default</span>
            <span className="arrowclass"></span>
          </div>
          <div id="more-practice" className="prMenuItem">
            Show more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rstage;
