const snoowrap = require('snoowrap');
const reddit = require('./reddit-api-calls.js');
module.exports = {
    postPassword: postPassword
}

const r = new snoowrap({
  userAgent: 'web:com.hackathon.blastpass:1.0.0 (by /u/speedst1998)',
  clientId: 'KYgyxWfHOrz0J4x0MWyO2Q',
  clientSecret: 'KbMznoTuzSCBcf-GUFUGeF-GMMvcmw',
  refreshToken: '133066628380-8X7TAt7zOHrW3YYcOeLy-SBKeSJFiQ'
});

function postPassword (username, password, website){
  r.getSubreddit('BlastPass').submitSelfpost({title: `${username } has just saved a new ${website} password for you`, text: `${password}`});
};