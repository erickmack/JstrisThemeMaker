const ImageInput = ({ description, ID, placeholder, handleSave,type }) => {
  return (
    <>
      <p>{description}</p>
      <input id={ID} type="text" placeholder={placeholder}></input>
      <button onClick={()=>handleSave(type,ID)}>Save</button>
    </>
  );
};

export default ImageInput;
