require('dotenv').config();
const snoowrap = require('snoowrap');

const r = new snoowrap({
  userAgent: process.env.USER_AGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});

async function postPassword (username, password, website){
  return r.getSubreddit('BlastPass').submitSelfpost({title: `${username } has just saved a new ${website} password for you`, text: `${password}`});
};

module.exports = {
  postPassword: postPassword
}
