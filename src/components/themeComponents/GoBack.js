import styled from 'styled-components'

const Button = styled.button`
    background-color: red;
    border: none;
`

const GoBack = ({handleClick}) => {
    return (
        <Button onClick={() => {
            handleClick('main');
            document.querySelector(".dropdown").classList.remove("open");
          }}>
            Go back
        </Button>
    )
}

export default GoBack
