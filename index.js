const express = require('express');
const { body, validationResult } = require('express-validator');

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
      // call post to reddit function
      res.send("good");
    } catch (err) {
      res.status(400).send("bad");
    }
});
