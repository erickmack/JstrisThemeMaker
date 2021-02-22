import Sizes from "./Sizes";

function BgSize({handleSelect,isPercentage,handleSlide,value}) {
  const sizes = ["Auto", "Cover", "Contain", "Percentage"];
  return (
    <>
      <p>Background size</p>
      <div className="sizes">
        {sizes.map((size) => (
          <Sizes key={size} name={size} handleSelect={handleSelect} />
        ))}
      </div>
      {isPercentage && (
        <div>
          <input
            onChange={(e) => handleSlide(e)}
            type="range"
            min="1"
            max="100"
            value={value}
          ></input>
        </div>
      )}
    </>
  );
}

export default BgSize;
