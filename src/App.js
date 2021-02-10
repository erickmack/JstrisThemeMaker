import Main from './components/Main'

import styled from 'styled-components'

const AppDiv = styled.div`
    background-color: black;
`

const App = () => {
    return <AppDiv id='app'>
        <Main/>
    </AppDiv>
}

export default App;