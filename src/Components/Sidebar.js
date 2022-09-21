
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
        <button>
          <img src="note.png" alt="N"></img>  
        </button>
        <button>
          <img src="link.png" alt="L"></img>  
        </button>
        <button>
          <img src="todo.png" alt="TD"></img>  
        </button>

      </div>
      <button>
        <img src="trash.png" alt="Tr"></img>  
      </button>
    </div>
  )
}


export default Sidebar