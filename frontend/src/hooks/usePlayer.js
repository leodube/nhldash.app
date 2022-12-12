import { useState } from "react";
import { playerService } from "../services";

const usePlayer = () => {
  const [player, setPlayer] = useState();

  const fetchPlayer = async (id) => {
    if (!id) {
      setPlayer();
      return;
    }

    let resPlayerInfo = await playerService.getPlayer(id);
    let resPlayerStats = await playerService.getPlayerStats(id);
    setPlayer({ info: resPlayerInfo, stats: resPlayerStats });
  };

  return [player, fetchPlayer];
};

export default usePlayer;
