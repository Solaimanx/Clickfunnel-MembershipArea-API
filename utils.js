const axios = require("axios").default;

const SaveNewUser = async ({ name, email, password }) => {
  const url = `https://clickfunnel-progress-tracker.vercel.app/new-user/${name}/${email}/${password}`;
  const { data } = axios.get(url);
  return data;
};

module.exports = { SaveNewUser };
