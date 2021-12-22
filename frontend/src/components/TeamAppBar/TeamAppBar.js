import React from "react";

// MUI Imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const TeamAppBar = (props) => {
  // Destructure props
  const { team, drawerWidth } = props;

  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {team && team.name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TeamAppBar;
