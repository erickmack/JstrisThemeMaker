import styled from 'styled-components'

const Button = styled.button`
    border: none;
    background-color: #3af7;
    &.selected{
        background-color: #3ff;
    }
`

const Sizes = ({name,handleSelect}) => {
    let sel
    if(name==='Auto'){sel=true}
    return (
        <Button id={name} className={sel&&'selected'} onClick={()=>handleSelect(name)}>
            {name}
        </Button>
    )
}

export default Sizes
