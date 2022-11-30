import axios from "axios";

const url = "https://nhldash-api.vercel.app";

const teamService = {
  getRoster: async (team_id) => {
    let res = await axios.get(url + `/team/${team_id}/roster`);
    return res.data || [];
  },
};

export default teamService;
