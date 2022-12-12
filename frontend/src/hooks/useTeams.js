import { useState, useEffect } from "react";
import { teamsService } from "../services";

const useTeams = () => {
  const [teams, setTeams] = useState();

  useEffect(() => {
    const fetchTeams = async () => {
      let resTeam = await teamsService.getTeams();
      setTeams(
        // sort teams by name
        resTeam.sort((firstEl, secondEl) => {
          return firstEl.name.localeCompare(secondEl.name);
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
