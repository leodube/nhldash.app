import axios from "axios";

// const url = "https://nhldash-api.vercel.app";
const url = "http://127.0.0.1:5000"

const teamsService = {
  getTeams: async () => {
    let res = await axios.get(url + "/teams");
    return res.data || [];
  },
};

export default teamsService;
