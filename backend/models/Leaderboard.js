const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  enrollments: { type: Number, default: 0 }
});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
