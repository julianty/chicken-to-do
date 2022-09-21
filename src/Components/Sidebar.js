
function Sidebar(props) {
  const style = { 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  }



  return (
    <div className='sidebar' style={style}>
      <div className='componentButtons' style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <button onClick={props.clickHandler}>
          <img src="note.png" alt="N" id='noteButton'></img>  
        </button>
        <button onClick={props.clickHandler}>
          <img src="link.png" alt="L" id='linkButton'></img>  
        </button>
        <button onClick={props.clickHandler}>
          <img src="todo.png" alt="TD" id='todoButton'></img>  
        </button>

      </div>
      <button onClick={props.clickHandler}>
        <img src="trash.png" alt="Tr" id='trashButton'></img>  
      </button>
    </div>
  )
}


export default Sidebar