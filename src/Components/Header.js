function Navbar(props) {
  return (
    <div className='nav-bar'>
      <button>H</button>
      <button>S</button>
      <button>N</button>
      <button>S</button>
    </div>
  )
}

function Logo(props) {
  return (
    <div className='logo'>
      L
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