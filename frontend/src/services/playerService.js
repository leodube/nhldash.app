import axios from "axios";

const playerService = {
  getPlayer: async (player_id) => {
    let res = await axios.get(`http://localhost:5000/players/${player_id}`);
    return res.data || [];
  },
  getPlayerStats: async (player_id) => {
    let res = await axios.get(
      `http://localhost:5000/players/${player_id}/stats`
    );
    return res.data || [];
  },
};

export default playerService;
