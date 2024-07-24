import axios from "axios";

// const url = "https://nhldash-api.vercel.app";
const url = "http://127.0.0.1:5000"

const teamService = {
  getRoster: async (team_abbr) => {
    let res = await axios.get(url + `/team/${team_abbr}/roster`);
    return res.data || [];
  },
};

export default teamService;
