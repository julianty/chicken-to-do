import { AppBar, Toolbar, Typography, styled } from "@mui/material";

function Navbar(props) {
  return (
    <div className="nav-bar">
      <button>
        <img src="help.png" alt="H" className="click-img"></img>
      </button>
      <button>
        <img src="search.png" alt="S" className="click-img"></img>
      </button>
      <button>
        <img src="notification.png" alt="N" className="click-img"></img>
      </button>
      <button>
        <img src="settings.png" alt="S" className="click-img"></img>
      </button>
    </div>
  );
}

function Logo(props) {
  const style = {
    display: "flex",
    gap: "5px",
  };
  return (
    <div className="logo" style={style}>
      <img src="Logo.png" id="tiny-logo" alt="L"></img>
      <div>Chicken To Do</div>
    </div>
  );
}
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

function Header(props) {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6">To Do</Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export default Header;
