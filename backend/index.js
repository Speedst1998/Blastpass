const express = require('express');
const { body, validationResult } = require('express-validator');
const redditPoster = require('./reddit-api-calls')

const app = express();
const port = 3000;

app.listen(port);

app.use(express.json());

app.post(
  '/post/password',
  body('username', 'Username is required').trim().not().isEmpty(),
  body('password', 'Password is required').trim().not().isEmpty(),
  body('website', 'Website is required').trim().not().isEmpty(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send("bad");
    } else {
      redditPoster.postPassword(req.body.username, req.body.password, req.body.website)
        .then(() => res.send("good"))
        .catch(err => {
          console.log(err);
          res.send("bad");
        });
    }
});
