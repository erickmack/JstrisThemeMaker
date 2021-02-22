const NumberInput = ({description,ID,value,inputChange}) => {
  return (
    <>
      <p>{description}</p>
      <input
        type="number"
        id={ID}
        value={value}
        min="0"
        max="40"
        onChange={(e) => inputChange(e.target.value, ID)}
      />
    </>
  );
};

export default NumberInput;
