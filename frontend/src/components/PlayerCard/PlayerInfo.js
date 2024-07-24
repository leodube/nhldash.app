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
        <Chip label={`Id: ${info.playerId}`} />
        <Chip label={`Height: ${info.heightInCentimeters}cm`} />
        <Chip label={`Weight: ${info.weightInKilograms}kg`} />
        <Chip label={`Shoots: ${info.shootsCatches}`} />
      </Stack>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: 180 }} component="th" scope="row">
              Sweater Number
            </TableCell>
            <TableCell align="left">{info.sweaterNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Position
            </TableCell>
            <TableCell align="left">
              {info.position == "L"
                ? "LW"
                : info.position == "R"
                ? "RW"
                : info.position}
            </TableCell>
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
            <TableCell align="left">
              {info.birthStateProvince && info.birthStateProvince.default}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Birth City
            </TableCell>
            <TableCell align="left">{info.birthCity.default}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Birth Date
            </TableCell>
            <TableCell align="left">{info.birthDate}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default PlayerInfo;
