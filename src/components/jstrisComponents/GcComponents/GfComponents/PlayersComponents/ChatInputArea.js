import { useSelector } from "react-redux";
import styled from "styled-components";
const Input = styled.input`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;
const Btn = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const ChatInputArea = () => {
  const chat = useSelector((state) => state.chat);
  return (
    <div id="chatInputArea">
      <div className="chatInputC">
        <Input
          backgroundColor={chat.inputBackground}
          color={chat.inputColor}
          type="text"
          autoComplete="off"
          size="500"
          id="chatInput"
          style={{ paddingRight: "37px" }}
          value="Wow erickmack so pro"
        />
      </div>
      <Btn
        backgroundColor={chat.buttonBackground}
        color={chat.buttonColor}
        id="sendMsg"
      >
        Send
      </Btn>
    </div>
  );
};

export default ChatInputArea;
