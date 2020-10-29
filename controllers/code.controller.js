const axios = require('axios');

const baseUrl = process.env.WAKATIME_API_BASE_URL;
const userToken = process.env.WAKATIME_API_USER_TOKEN;
const username = process.env.WAKATIME_API_USER_USERNAME;

const getCodingStats = (req, res) => {
  axios
    .get(`${baseUrl}/users/${username}/stats/last_7_days`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Basic ${userToken}`
      }
    })
    .then((response) => {
      res.status(response.status).json(response.data).end();
    })
    .catch((error) => {
      res.status(error.response.status).json(error).end();
    });
};

const getUserInfo = (req, res) => {
  axios
    .get(`${baseUrl}/users/${username}`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Basic ${userToken}`
      }
    })
    .then((response) => {
      res.status(response.status).json(response.data).end();
    })
    .catch((error) => {
      res.status(error.response.status).json(error).end();
    });
};

module.exports = {
  getCodingStats,
  getUserInfo
};
