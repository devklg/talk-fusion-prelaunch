const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const signupRoutes = require('./routes/signupRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const earningsRoutes = require('./routes/earningsRoutes');
const config = require('./config');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/signups', signupRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/earnings', earningsRoutes);

app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));