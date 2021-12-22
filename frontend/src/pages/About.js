import React from "react";
import { useNavigate } from "react-router-dom";
import { TeamAppBar } from "../components";

// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";

const About = () => {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <TeamAppBar drawerWidth={0} />
      <Fab
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        color="primary"
        onClick={() => navigate("/")}
      >
        <HomeIcon />
      </Fab>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: "100%",
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <Toolbar />
        <Typography variant="h3" component="div">
          About
        </Typography>
        <Typography variant="h5" component="div">
          Features
        </Typography>
        <ul>
          <li>
            To select a player, you first choose the team from the left sidebar.
          </li>
          <li>
            The active players on the team roster will be displayed. From here,
            click on the desired player.
          </li>
          <li>
            A modal will appear showing some basic information about the player.
            To view player stats click on the "Stats" tab.
          </li>
        </ul>
        <Typography variant="h5" component="div">
          Built With
        </Typography>
        <Typography variant="h6" component="div">
          Frontend
        </Typography>
        <ul>
          <li>
            The frontend uses React with React Hooks for state management.
          </li>
          <li>
            I bootstrapped it with Create React App. I have a custom react
            boilerplate that provides me with greater customization but decided
            to use CRA because it was quicker to get started.
          </li>
          <li>
            I styled it with Material-UI. I considered using Bootstrap as it
            provides more customization, but I again went with the quicker
            option.
          </li>
          <li>
            The frontend is a single page application that uses client-side
            routing with React Router.
          </li>
          <li>Axios was used for the HTTP client.</li>
        </ul>
        <Typography variant="h6" component="div">
          Backend
        </Typography>
        <ul>
          <li>Extended backend to get players by team roster.</li>
        </ul>
        <Typography variant="h5" component="div">
          Next steps
        </Typography>
        <Typography variant="h6" component="div">
          Given more time I would...
        </Typography>
        <ul>
          <li>Add a search option to quickly find a player.</li>
          <li>Add team logos to the left of the teams list.</li>
          <li>
            Change the theme colors to match the selected team's
            primary/secondary colors.
          </li>
          <li>
            Add the option to select a second player card and align them
            side-by-side to compare player statistics.
          </li>
        </ul>
        <Typography variant="h6" component="div">
          If the project were to be scaled I would...
        </Typography>
        <ul>
          <li>Extended backend to get players by team roster.</li>
        </ul>
      </Box>
    </React.Fragment>
  );
};

export default About;
