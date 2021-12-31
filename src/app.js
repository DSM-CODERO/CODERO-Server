const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
const router = require('./routes/index');

const PORT = process.env.PORT || 4000;

require('dotenv').config();

const corsOptions = {
  origin: '*',
  method: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use('/', router);
app.use(morgan('dev'));

app.set('jwt-secret', process.env.JWTKEY);
app.set('refresh-secret', process.env.JWTSECRET);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
  console.log('Listening on', PORT);
});
