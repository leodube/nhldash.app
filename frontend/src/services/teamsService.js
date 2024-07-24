import axios from "axios";

const url = "https://nhldash-api.vercel.app";

const teamsService = {
  getTeams: async () => {
    let res = await axios.get(url + "/teams");
    return res.data || [];
  },
};

export default teamsService;
