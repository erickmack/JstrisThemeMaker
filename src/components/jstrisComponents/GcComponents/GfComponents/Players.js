import Slot from './PlayersComponents/Slot'
import ChatArea from './PlayersComponents/ChatArea'
import ChatInputArea from './PlayersComponents/ChatInputArea'

const Players = () => {
    return (
        <div id='players' className='players'>
            <div id="gameSlots" className="slots">
                <Slot/>
            </div>
            <ChatArea/>
            <ChatInputArea/>
        </div>
    )
}

export default Players
