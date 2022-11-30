import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { teamsService, playerService } from "../services";
import { TeamAppBar, TeamsList, Roster, PlayerCard } from "../components";

// MUI imports
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const drawerWidth = 240;

const Dashboard = () => {
  let navigate = useNavigate();

  // State variables
  const [teams, setTeams] = useState();
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [openPlayerModal, setOpenPlayerModal] = useState(false);

  useEffect(() => {
    if (!teams) {
      getTeams();
    }
  });

  const getTeams = async () => {
    let resTeam = await teamsService.getTeams();
    setTeams(
      // sort teams by name
      resTeam.sort((firstEl, secondEl) => {
        return firstEl.name.localeCompare(secondEl.name);
      })
    );
  };

  const getPlayer = async (id) => {
    let resPlayerInfo = await playerService.getPlayer(id);
    let resPlayerStats = await playerService.getPlayerStats(id);
    setSelectedPlayer({ info: resPlayerInfo, stats: resPlayerStats });
  };

  const handleTeamsListItemClick = (event, index) => {
    setSelectedTeamIndex(index);
  };

  const handlePlayerModalOpen = (event, id) => {
    getPlayer(id);
    setOpenPlayerModal(true);
  };

  const handlePlayerModalClose = () => {
    setOpenPlayerModal(false);
    setSelectedPlayer();
  };

  return (
    <React.Fragment>
      <TeamAppBar
        team={teams && teams[selectedTeamIndex]}
        drawerWidth={drawerWidth}
      />
      <TeamsList
        teams={teams}
        drawerWidth={drawerWidth}
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
