import axios from "axios";

const url = "https://nhldash-api.vercel.app";

const playerService = {
  getPlayer: async (player_id) => {
    let res = await axios.get(url + `/players/${player_id}`);
    return res.data || [];
  },
  getPlayerStats: async (player_id) => {
    let res = await axios.get(url + `/players/${player_id}/stats`);
    return res.data || [];
  },
};

export default playerService;
