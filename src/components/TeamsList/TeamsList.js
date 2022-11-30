import React from "react";

// MUI Imports
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

const TeamsList = (props) => {
  // Destructure props
  const { teams, drawerWidth, handleTeamsListItemClick, selectedTeamIndex } =
    props;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
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
    </Drawer>
  );
};

export default TeamsList;
