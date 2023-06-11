const axios = require('axios');
const constants = require('./constants');

const baseUrl = constants.BASE_URL;
const height = constants.HEIGHT;
const color = constants.COLOR;
const size = constants.SIZE;
const width = constants.WIDTH;

async function fetchImage(title) {
  let url = `${baseUrl}${title}?width=${width}&height=${height}&color=${color}?&s=${size}`;
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      responseEncoding: 'binary',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  fetchImage,
};
