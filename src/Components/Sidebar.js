import { Drawer, Divider, List, ListItem, Toolbar } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const drawerWidth = 80;

export default function Sidebar({ clickHandler }) {
  function noteClick(e) {
    // Handles clicks on the note button
    console.log("Click registered");
    clickHandler(e);
  }
  const theme = useTheme();
  const iconStyle = {
    margin: "auto",
    color: theme.palette.primary.light,
  };
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {/* Add click handlers to make new notes */}
        <ListItem>
          <NoteAddIcon sx={iconStyle} onClick={noteClick} />
        </ListItem>
        <ListItem>
          <FormatListBulletedIcon sx={iconStyle} />
        </ListItem>
      </List>
    </Drawer>
  );
}
