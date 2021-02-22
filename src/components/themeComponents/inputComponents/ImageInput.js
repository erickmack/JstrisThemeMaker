const ImageInput = ({ description, ID, placeholder, handleSave }) => {
  return (
    <>
      <p>{description}</p>
      <input id={ID} type="text" placeholder={placeholder}></input>
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default ImageInput;
