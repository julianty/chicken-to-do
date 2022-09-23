
function Sidebar(props) {
  const style = { 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  }



  return (
    <div className='sidebar' style={style}>
      <div className='componentButtons' style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <button onClick={props.clickHandler}>
          <img src="note.png" 
            alt="N" 
            id='noteButton' 
            className="click-img"></img>  
        </button>
        <button onClick={props.clickHandler}>
          <img src="link.png" 
          alt="L" 
          id='linkButton' 
          className="click-img"></img>  
        </button>
        <button onClick={props.clickHandler}>
          <img src="todo.png" 
          alt="TD" 
          id='todoButton' 
          className="click-img"></img>  
        </button>

      </div>
      <button onClick={props.clickHandler}>
        <img src="trash.png" 
        alt="Tr" 
        id='trashButton' 
        className="click-img"></img>  
      </button>
    </div>
  )
}


export default Sidebar