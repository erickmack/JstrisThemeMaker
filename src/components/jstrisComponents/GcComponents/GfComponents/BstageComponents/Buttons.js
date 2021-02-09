import styled from 'styled-components'

const Button = styled.button`
    #settings {
        margin: 0 2px;
    }
`

const Buttons = () => {
    return (
        <div id='buttonsBox'>
            <Button>Lobby</Button>
            <Button style={{margin:'0 4px'}}>Settings</Button>
            <Button>New Game</Button>
        </div>
    )
}

export default Buttons
