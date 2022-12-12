import React from "react";

// MUI Imports
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

const TeamsList = (props) => {
  // Destructure props
  const {
    teams,
    drawerWidth,
    open,
    toggleOpen,
    handleTeamsListItemClick,
    selectedTeamIndex,
  } = props;

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {teams &&
          teams.map((team, index) => (
            <ListItemButton
              key={index}
              selected={selectedTeamIndex === index}
              onClick={(event) => handleTeamsListItemClick(event, index)}
            >
              <ListItemText primary={team.name} />
            </ListItemButton>
          ))}
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        anchor="left"
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default TeamsList;
