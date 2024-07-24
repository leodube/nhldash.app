import { useState, useEffect } from "react";
import { teamsService } from "../services";

const useTeams = () => {
  const [teams, setTeams] = useState();

  useEffect(() => {
    const fetchTeams = async () => {
      let resTeams = await teamsService.getTeams();
      setTeams(
        // sort teams by name
        resTeams
        .filter((team) => {
          return team.teamAbbrev.default != 'ARI'
        })
        .sort((firstEl, secondEl) => {
          return firstEl.teamName.default.localeCompare(
            secondEl.teamName.default
          );
        })
      );
    };

    if (!teams) {
      fetchTeams().catch(console.error);
    }
  });

  return teams;
};

export default useTeams;
