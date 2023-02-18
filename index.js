const express = require('express');
const { body, validationResult } = require('express-validator');
const redditPoster = require('./reddit-api-calls')

const app = express();
const port = 3000;

app.listen(port);

app.use(express.json());

app.post(
  '/',
  body('username', 'Username is required').trim().not().isEmpty(),
  body('password', 'Password is required').trim().not().isEmpty(),
  body('website', 'Website is required').trim().not().isEmpty(),
  (req, res) => {
    try {
      validationResult(req).throw();
      redditPoster.postPassword(req.body.username, req.body.password, req.body.website);
      res.send("good");
    } catch (err) {
      res.status(400).send("bad");
    }
});
