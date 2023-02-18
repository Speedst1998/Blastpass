const express = require('express');
const snoowrap = require('snoowrap');
const app = express();
const port = 3000;

const r = new snoowrap({
  userAgent: 'web:com.hackathon.blastpass:1.0.0 (by /u/speedst1998)',
  clientId: 'KYgyxWfHOrz0J4x0MWyO2Q',
  clientSecret: 'KbMznoTuzSCBcf-GUFUGeF-GMMvcmw',
  refreshToken: '133066628380-8X7TAt7zOHrW3YYcOeLy-SBKeSJFiQ'
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

