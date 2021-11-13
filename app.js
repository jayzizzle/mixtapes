const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');

// Require Routes
const users = require('./routes/api/users');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((error) => console.log(error));

// Routes
app.use('/api/users', users);

app.get('/', (req, res) => res.send('Mixtapes'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
