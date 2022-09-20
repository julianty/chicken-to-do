
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
        <button>N</button>
        <button>L</button>
        <button>TD</button>
      </div>
      <button>Tr</button>
    </div>
  )
}


export default Sidebar