import React from "react";

// MUI imports
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const PlayerInfo = (props) => {
  // Destructure props
  const { info } = props;

  return (
    <Box sx={{ pt: 2, pb: 2 }}>
      <Stack direction="row" spacing={1}>
        {info.alternateCaptain && <Chip label="Alternate Captain" />}
        {info.captain && <Chip label="Captain" />}
        {info.rookie && <Chip label={`Age: ${info.currentAge}`} />}
        <Chip label={`Age: ${info.currentAge}`} />
        <Chip label={`Height: ${info.height}`} />
        <Chip label={`Weight: ${info.weight}`} />
        <Chip label={`Shoots: ${info.shootsCatches}`} />
      </Stack>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: 180 }} component="th" scope="row">
              Sweater Number
            </TableCell>
            <TableCell align="left">{info.primaryNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Position
            </TableCell>
            <TableCell align="left">{info.primaryPosition.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Birth Country
            </TableCell>
            <TableCell align="left">{info.birthCountry}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Birth State/Province
            </TableCell>
            <TableCell align="left">{info.birthStateProvince}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Birth City
            </TableCell>
            <TableCell align="left">{info.birthCity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Birth Date
            </TableCell>
            <TableCell align="left">{info.birthDate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Nationality
            </TableCell>
            <TableCell align="left">{info.nationality}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default PlayerInfo;
