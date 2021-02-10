const Navigation = ({name,handleClick}) => {
    return (
        <div>
            <button onClick={()=>handleClick(name)}>Go back</button>
            <h4>Here you change the navbar look</h4>
        </div>
    )
}

export default Navigation
