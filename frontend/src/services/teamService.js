import axios from "axios";

const teamService = {
  getRoster: async (team_id) => {
    let res = await axios.get(`http://localhost:5000/team/${team_id}/roster`);
    return res.data || [];
  },
};

export default teamService;
