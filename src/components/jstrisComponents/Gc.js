import GameFrame from './GcComponents/GameFrame'

import styled from 'styled-components'

const Container = styled.div`
   
`

const Gc = () => {
    return (
        <Container className='container' id='gc'>
            <GameFrame/>
        </Container>
    )
}

export default Gc
