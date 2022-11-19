import axios from "axios";

const teamsService = {
  getTeams: async () => {
    let res = await axios.get("http://localhost:5000/teams");
    return res.data || [];
  },
};

export default teamsService;
