const ChatInputArea = () => {
  return (
    <div id="chatInputArea">
      <div className="chatInputC">
        <input
          type="text"
          autocomplete="off"
          size="500"
          id="chatInput"
          value=""
          style={{paddingRight: '37px'}}
        />
      </div>
      <button id="sendMsg">Send</button>
    </div>
  );
};

export default ChatInputArea;
