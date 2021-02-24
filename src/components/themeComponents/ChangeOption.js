import styled from "styled-components";

let theme = "solarized";

const Button = styled.button`
  background-color: #3b3b4f};
  margin: 0 10px 10px 10px;
  color: white;
  border: 2px solid white;
  font-weight: bold;
  border-radius: 4px;
  &:hover{
    background-color: #f3f3f3;
    color: #222
  }
`;

const ChangeOption = ({ name, handleClick, id }) => {
  return (
    <Button
      id={id}
      onClick={() => {
        handleClick(name);
        if (name === "Navigation") {
          document.querySelector(".dropdown").classList.add("open");
        }
      }}
    >
      {name}
    </Button>
  );
};

export default ChangeOption;
