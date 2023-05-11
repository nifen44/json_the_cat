const request = require('request');

const fetchBreedDescription = (breedName, callback) =>{
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) =>{
    const data = JSON.parse(body);
    const desc = (data.length !== 0 ? data[0].description : null);
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };

