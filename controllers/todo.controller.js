const axios = require('axios');

const baseUrl = process.env.TODOIST_API_BASE_URL;
const userToken = process.env.TODOIST_API_USER_TOKEN;

const getAllItems = (req, res) => {
  axios
    .get(`${baseUrl}/tasks`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userToken}`
      }
    })
    .then((response) => {
      res.status(response.status).json(response.data).end();
    })
    .catch((error) => {
      res.status(error.response.status).json(error).end();
    });
};

const getItemById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${baseUrl}/tasks/${id}`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userToken}`
      }
    })
    .then((response) => {
      res.status(response.status).json(response.data).end();
    })
    .catch((error) => {
      res.status(error.response.status).json(error).end();
    });
};

const closeItemById = (req, res) => {
  const { id } = req.params;

  axios
    .post(
      `${baseUrl}/tasks/${id}/close`,
      {},
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userToken}`
        }
      }
    )
    .then((response) => {
      res.status(response.status).json(response.data).end();
    })
    .catch((error) => {
      res.status(error.response.status).json(error).end();
    });
};

module.exports = {
  getAllItems,
  getItemById,
  closeItemById
};
