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

const PlayerStatsGoalie = (props) => {
  // Destructure props
  const { stats } = props;
  console.log(stats);

  return (
    <Box sx={{ pt: 2, pb: 2 }}>
      <Stack direction="row" spacing={1}>
        <Chip label={`Games Played: ${stats.gamesPlayed}`} />
        <Chip label={`Games Started: ${stats.gamesStarted}`} />
      </Stack>
      <Typography sx={{ pt: 1 }} variant="h6" component="div">
        All Situations
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 400 }}>Stat</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Wins
            </TableCell>
            <TableCell align="left">{stats.wins}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Losses
            </TableCell>
            <TableCell align="left">{stats.losses}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Goals Against
            </TableCell>
            <TableCell align="left">{stats.goalsAgainst}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Save Percentage
            </TableCell>
            <TableCell align="left">{stats.savePctg.toFixed(3)}%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Goals Against Average
            </TableCell>
            <TableCell align="left">
              {stats.goalsAgainstAvg.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Shutouts
            </TableCell>
            <TableCell align="left">{stats.shutouts}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default PlayerStatsGoalie;
