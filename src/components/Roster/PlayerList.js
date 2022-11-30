import React from "react";

// MUI imports
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

const PlayerList = (props) => {
  // Destructure props
  const { roster, type = "Forward", openPlayerModal } = props;

  return (
    <List dense>
      {roster &&
        roster
          .filter((player) => player.position.type === type)
          .sort((firstEl, secondEl) => {
            return firstEl.person.fullName.localeCompare(
              secondEl.person.fullName
            );
          })
          .map((player, index) => (
            <ListItemButton
              key={index}
              onClick={(event) => openPlayerModal(event, player.person.id)}
            >
              <ListItemAvatar>
                <Avatar
                  alt={player.person.fullName}
                  src={`http://nhl.bamcontent.com/images/headshots/current/60x60/${player.person.id}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={player.person.fullName}
                secondary={player.position.name}
              />
            </ListItemButton>
          ))}
    </List>
  );
};

export default PlayerList;
