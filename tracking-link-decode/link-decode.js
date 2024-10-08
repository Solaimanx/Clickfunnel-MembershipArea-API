const axios = require("axios");

const retriveLink = async (req, res) => {
  const { query } = req;
  axios
    .get(`http://167.89.115.120/ls/click?upn=${query.upn}`, {
      headers: {
        Host: "url472.english21days.co.il",
      },
      maxRedirects: 0,
    })
    .catch((error) => {
      if (error.response.status == 302) {
        const link = error?.response?.headers?.location;
        return res.json({
          status: "success",
          link,
        });
      } else {
        return res.json({
          status: "failed",
        });
      }
    });
};

module.exports = {
  retriveLink,
};
