import React from "react";

// MUI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const PlayerStatsSkater = (props) => {
  // Destructure props
  const { stats } = props;

  return (
    <Box sx={{ pt: 2, pb: 2 }}>
      <Stack direction="row" spacing={1}>
        <Chip label={`Games Played: ${stats.games}`} />
      </Stack>
      <Typography sx={{ pt: 1 }} variant="h6" component="div">
        All Situations
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stat</TableCell>
            <TableCell align="left">Total</TableCell>
            <TableCell align="left">Per Game</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Time on Ice
            </TableCell>
            <TableCell align="left">{stats.timeOnIce}</TableCell>
            <TableCell align="left">{stats.timeOnIcePerGame}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Points
            </TableCell>
            <TableCell align="left">{stats.points}</TableCell>
            <TableCell align="left">
              {(stats.points / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Goals
            </TableCell>
            <TableCell align="left">{stats.goals}</TableCell>
            <TableCell align="left">
              {(stats.goals / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Assists
            </TableCell>
            <TableCell align="left">{stats.assists}</TableCell>
            <TableCell align="left">
              {(stats.assists / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Shots
            </TableCell>
            <TableCell align="left">{stats.shots}</TableCell>
            <TableCell align="left">
              {(stats.shots / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Shooting Percentage
            </TableCell>
            <TableCell align="left">{stats.shotPct}%</TableCell>
            <TableCell align="left">-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Plus/Minus
            </TableCell>
            <TableCell align="left">{stats.plusMinus}</TableCell>
            <TableCell align="left">
              {(stats.plusMinus / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Blocked Shots
            </TableCell>
            <TableCell align="left">{stats.blocked}</TableCell>
            <TableCell align="left">
              {(stats.blocked / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Hits
            </TableCell>
            <TableCell align="left">{stats.hits}</TableCell>
            <TableCell align="left">
              {(stats.hits / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Penalty Minutes
            </TableCell>
            <TableCell align="left">{stats.pim}</TableCell>
            <TableCell align="left">
              {(stats.pim / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Shifts
            </TableCell>
            <TableCell align="left">{stats.shifts}</TableCell>
            <TableCell align="left">
              {(stats.shifts / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography sx={{ pt: 2 }} variant="h6" component="div">
        Power Play (5v4)
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stat</TableCell>
            <TableCell align="left">Total</TableCell>
            <TableCell align="left">Per Game</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Time on Ice
            </TableCell>
            <TableCell align="left">{stats.powerPlayTimeOnIce}</TableCell>
            <TableCell align="left">
              {stats.powerPlayTimeOnIcePerGame}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Points
            </TableCell>
            <TableCell align="left">{stats.powerPlayPoints}</TableCell>
            <TableCell align="left">
              {(stats.powerPlayPoints / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Goals
            </TableCell>
            <TableCell align="left">{stats.powerPlayGoals}</TableCell>
            <TableCell align="left">
              {(stats.powerPlayGoals / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Assists
            </TableCell>
            <TableCell align="left">
              {stats.powerPlayPoints - stats.powerPlayGoals}
            </TableCell>
            <TableCell align="left">
              {(
                (stats.powerPlayPoints - stats.powerPlayGoals) /
                stats.games
              ).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography sx={{ pt: 2 }} variant="h6" component="div">
        Short Handed (4v5)
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stat</TableCell>
            <TableCell align="left">Total</TableCell>
            <TableCell align="left">Per Game</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Time on Ice
            </TableCell>
            <TableCell align="left">{stats.shortHandedTimeOnIce}</TableCell>
            <TableCell align="left">
              {stats.shortHandedTimeOnIcePerGame}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Points
            </TableCell>
            <TableCell align="left">{stats.shortHandedPoints}</TableCell>
            <TableCell align="left">
              {(stats.shortHandedPoints / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Goals
            </TableCell>
            <TableCell align="left">{stats.shortHandedGoals}</TableCell>
            <TableCell align="left">
              {(stats.shortHandedGoals / stats.games).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Assists
            </TableCell>
            <TableCell align="left">
              {stats.shortHandedPoints - stats.shortHandedGoals}
            </TableCell>
            <TableCell align="left">
              {(
                (stats.shortHandedPoints - stats.shortHandedGoals) /
                stats.games
              ).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default PlayerStatsSkater;
