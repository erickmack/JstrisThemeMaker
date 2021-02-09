import Navbar from './components/jstrisComponents/Navbar'
import Gc from './components/jstrisComponents/Gc'

import styled from 'styled-components'

const AppDiv = styled.div`
    background-color: black;
`

const App = () => {
    return <AppDiv id='app'>
        <Navbar/>
        <Gc/>
    </AppDiv>
}

export default App;