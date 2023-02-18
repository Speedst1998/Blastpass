const express = require('express');
const { body, validationResult } = require('express-validator');
const redditPoster = require('./reddit-api-calls')
const cors = require('cors');

const app = express();
const port = 3030;

app.listen(port);

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.post(
  '/post/password',
  body('username', 'Username is required').trim().not().isEmpty(),
  body('password', 'Password is required').trim().not().isEmpty(),
  body('website', 'Website is required').trim().not().isEmpty(),
  (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send(errors.mapped().msg);
    } else {
      console.log("Sending post")
      redditPoster.postPassword(req.body.username, req.body.password, req.body.website)
        .then(() => res.send("Request Success"))
        .catch(err => {
          console.log(err);
          res.send(err);
        });
    }
});
