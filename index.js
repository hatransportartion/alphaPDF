const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');

const env = require('dotenv').config();
const port = process.env.PORT || 9000;

const route = require('./route');

// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'logo')));
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: false }));
app.set('view engine', 'hbs');

//LOg middleware
app.use((req, res, next) => {
  //log date in PST format
  const date = new Date();
  const options = { timeZone: 'America/Los_Angeles', hour12: false };
  const dateString = date.toLocaleString('en-US', options);
  console.log(`${dateString} ${req.ip}, ${req.hostname} ${req.url} ${req.method}`);
  next();
});

app.use('/pdf', route );

//Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke!');
});
app.use((req, res, next) => {
    res.status(404).send('Sorry, that route does not exist.');
});

app.listen(port, () => {
  console.log(`Alpha PDF app listening on port ${port}`)
});