import ChangeOption from './ChangeOption'

import styled from 'styled-components'

let theme = 'solarized'

const Side = styled.div`
    background-color: ${(props) =>props.theme[theme].bg};
    flex: 1;
    display: grid;
`

const componentsToChange = ['Navigation','Background','Board','Buttons','Stats','Enemy Board','Chat']

const SideBar = () => {
    return (
        <Side>
            {componentsToChange.map(name=>(
                <ChangeOption name={name}/>
            ))}
        </Side>
    )
}

export default SideBar
