import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TeamAppBar, TeamsList, Roster, PlayerCard } from "../components";
import { useTeams, usePlayer } from "../hooks";

// MUI imports
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const drawerWidth = 240;

const Dashboard = () => {
  let navigate = useNavigate();

  // State variables
  const teams = useTeams();
  const [selectedPlayer, setSelectedPlayer] = usePlayer();
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
  const [openPlayerModal, setOpenPlayerModal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTeamsListItemClick = (event, index) => {
    setSelectedTeamIndex(index);
    setMobileOpen(false);
  };

  const handlePlayerModalOpen = (event, id) => {
    setSelectedPlayer(id);
    setOpenPlayerModal(true);
  };

  const handlePlayerModalClose = () => {
    setOpenPlayerModal(false);
    setSelectedPlayer();
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <React.Fragment>
      <TeamAppBar
        team={teams && teams[selectedTeamIndex]}
        drawerWidth={drawerWidth}
        open={mobileOpen}
        toggleOpen={handleDrawerToggle}
      />
      <TeamsList
        teams={teams}
        drawerWidth={drawerWidth}
        open={mobileOpen}
        toggleOpen={handleDrawerToggle}
        handleTeamsListItemClick={handleTeamsListItemClick}
        selectedTeamIndex={selectedTeamIndex}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Roster
          team={teams && teams[selectedTeamIndex]}
          openPlayerModal={handlePlayerModalOpen}
        />
        {selectedPlayer && (
          <PlayerCard
            player={selectedPlayer}
            open={openPlayerModal}
            handleClose={handlePlayerModalClose}
          />
        )}
        <Fab
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          color="primary"
          onClick={() => navigate("/about")}
        >
          <QuestionMarkIcon />
        </Fab>
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;
