const env = require('dotenv').config();
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db')

const port = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.db = db
  next()
})

// ENPOINTS
app.use('/api', require('./routes'))

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(`${__dirname}/../build`));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(`${__dirname}/../build/index.html`));
    });
  }

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
