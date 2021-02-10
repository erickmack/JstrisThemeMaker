const ChatInputArea = () => {
  return (
    <div id="chatInputArea">
      <div className="chatInputC">
        <input
          type="text"
          autoComplete="off"
          size="500"
          id="chatInput"
          style={{paddingRight: '37px'}}
        />
      </div>
      <button id="sendMsg">Send</button>
    </div>
  );
};

export default ChatInputArea;
