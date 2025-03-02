const Leaderboard = require('../models/Leaderboard');

exports.getLeaderboard = async (req, res) => {
  try {
    const leaders = await Leaderboard.find().sort({ enrollments: -1 }).limit(10);
    res.status(200).json(leaders);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

