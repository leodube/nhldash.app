import React, { useState, useEffect } from "react";
import { teamService } from "../../services";
import PlayerList from "./PlayerList";

// MUI imports
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Roster = (props) => {
  // Destructure props
  const { team, openPlayerModal } = props;

  const [roster, setRoster] = useState();

  useEffect(() => {
    if (team) {
      getRoster();
    }
  }, [team]);

  const getRoster = async () => {
    let res = await teamService.getRoster(team.id);
    setRoster(res);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography sx={{ mt: 2, mb: 1 }} variant="h6" component="div">
          Forwards
        </Typography>
        <Divider />
        <PlayerList
          roster={roster}
          type="Forward"
          openPlayerModal={openPlayerModal}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ mt: 2, mb: 1 }} variant="h6" component="div">
          Defensemen
        </Typography>
        <Divider />
        <PlayerList
          roster={roster}
          type="Defenseman"
          openPlayerModal={openPlayerModal}
        />
        <Typography sx={{ mt: 2, mb: 1 }} variant="h6" component="div">
          Goalies
        </Typography>
        <Divider />
        <PlayerList
          roster={roster}
          type="Goalie"
          openPlayerModal={openPlayerModal}
        />
      </Grid>
    </Grid>
  );
};

export default Roster;
