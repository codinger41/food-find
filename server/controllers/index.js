require('dotenv').config();
const yelp = require('yelp-fusion');

const client = yelp.client(process.env.YELP_API_KEY);


exports.search = (req, res) => {
  const { query: { term, location } } = req;
  client.search({
    term,
    location
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
