import styled from 'styled-components'

let theme = 'dark'

const Navbar = styled.nav`
    background-color: ${props=>props.theme[theme].bg};
    color: ${props=>props.theme[theme].textColor};
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
