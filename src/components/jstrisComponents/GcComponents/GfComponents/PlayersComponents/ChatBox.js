import styled from 'styled-components'

import {useSelector} from 'react-redux'

const Chat = styled.div`
  background-color: ${props=>props.backgroundColor};
`

const Servermsg= styled.div`
  color: ${props=>props.color};
`
const Usermsg = styled.div`
  color: ${props=>props.color}
`
const ChatBox = () => {
  const chat = useSelector(state => state.chat)
  return (
    <Chat backgroundColor={chat.backgroundColor} id="chatBox" style={{ height: "154px" }}>
      <div id="chatContent">
        <div id="ch1"></div>
        <Servermsg color={chat.serverColor}>
          <em>
            This is your private room where you won't be disturbed while making
            a theme.
          </em>
        </Servermsg>
        <Usermsg color={chat.messageColor}>
          <b>
            <a href="#" style={{color:'#70fda9'}}>
              Erickmack
            </a>
          </b>
          : don't forget to share the themes you make!
        </Usermsg>
      </div>
    </Chat>
  );
};

export default ChatBox;
