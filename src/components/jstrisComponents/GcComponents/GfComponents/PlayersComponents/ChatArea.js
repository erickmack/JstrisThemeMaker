import ChatBox from "./ChatBox";

const ChatArea = () => {
  return (
    <div className="chatArea">
      <div
        id="chatExpand"
        className="exUp"
        data-toggle="tooltip"
        data-placement="auto right"
        title=""
        data-original-title="Expand"
      ></div>
      <div
        id="frLobby"
        className="fri"
        data-toggle="tooltip"
        data-placement="auto right"
        title=""
        data-original-title="Friends"
      ></div>
      <ChatBox />
    </div>
  );
};

export default ChatArea;
