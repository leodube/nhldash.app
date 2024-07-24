import axios from "axios";

const url = "https://nhldash-api.vercel.app";

const playerService = {
  getPlayer: async (player_id) => {
    let res = await axios.get(url + `/players/${player_id}`);
    return res.data || [];
  },
  getPlayerStats: async (player_id) => {
    let res = await axios.get(url + `/players/${player_id}`);

    if (!res.data) { return [] }

    return res.data.seasonTotals.filter((seasonTotal) => {
      return seasonTotal.gameTypeId == 2 && seasonTotal.leagueAbbrev == 'NHL'
    }
    ).at(-1);
  },
};

export default playerService;
