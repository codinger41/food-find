require('dotenv').config();
const yelp = require('yelp-fusion');

const client = yelp.client(process.env.YELP_API_KEY);


exports.search = (req, res) => {
  const { query: { term, longitude, latitude } } = req;
  client.search({
    term,
    longitude,
    latitude
  }).then(response => {
    return res.json({
      data: response.jsonBody.businesses,
      success: true
    })
  }).catch(err => {
    return res.json({
      success: false,
      message: JSON.parse(err.response.body).error.description
    })
  });  
};
