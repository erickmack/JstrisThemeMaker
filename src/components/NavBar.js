import styled from 'styled-components'

let theme = 'solarized'

const Navbar = styled.nav`
    background-color: ${props=>props.theme[theme].bg};
    color: ${props=>props.theme[theme].dark};
    padding: 10px 20px;
    display: flex;
    height: 10vh;
`

const NavBar = () => {
    return (
        <Navbar>
           <h3>Jstris Theme Maker</h3> 
        </Navbar>
    )
}

export default NavBar
