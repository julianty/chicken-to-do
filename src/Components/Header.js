function Navbar(props) {
  return (
    <div className='nav-bar'>
      <button>
        <img src="help.png" alt="H" className="click-img"></img>  
      </button>
      <button>
        <img src="search.png" alt="S" className="click-img"></img>  
      </button>
      <button>
        <img src="notification.png" alt="N" className="click-img" ></img>  
      </button>
      <button>
        <img src="settings.png" alt="S" className="click-img"></img>  
      </button>
    </div>
  )
}

function Logo(props) {
  const style = {
    display: 'flex',
    gap: '5px'
  }
  return (
    <div className='logo' style={style}>
      <img src="Logo.png" id="tiny-logo" alt="L"></img>
      <div>Chicken To Do</div>
    </div>
  )
}

function Header(props) {
  const style = {
    gridColumn: '1/-1',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: 'lightgray'
  }
  return (
    <div className='header' style={style}>
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header