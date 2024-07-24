import React from "react";

// MUI imports
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

const PlayerList = (props) => {
  // Destructure props
  const { roster, type = "forwards", openPlayerModal } = props;

  return (
    <List dense>
      {roster &&
        roster[type]
          .sort((firstEl, secondEl) => {
            return firstEl.firstName.default.localeCompare(
              secondEl.firstName.default
            );
          })
          .map((player, index) => (
            <ListItemButton
              key={index}
              onClick={(event) => openPlayerModal(event, player.id)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={player.firstName.default + " " + player.lastName.default}
                  src={player.headshot}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  player.firstName.default + " " + player.lastName.default
                }
                secondary={
                  player.positionCode == "L"
                    ? "LW"
                    : player.positionCode == "R"
                    ? "RW"
                    : player.positionCode
                }
              />
            </ListItemButton>
          ))}
    </List>
  );
};

export default PlayerList;
