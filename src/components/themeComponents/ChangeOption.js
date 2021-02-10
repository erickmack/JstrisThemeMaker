import styled from 'styled-components'

let theme = 'solarized'

const Button = styled.button`
    background-color: ${props=>props.theme[theme].main};
    margin: 5px 10px;
    color: ${props=>props.theme[theme].bg};
    border: none;
    font-weight: bold;
    border-radius: 4px;
`

const ChangeOption = ({name}) => {
    return (
        <Button>
            {name}
        </Button>
    )
}

export default ChangeOption
