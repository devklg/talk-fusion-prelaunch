const Earnings = require('../models/Earnings');

exports.getEarnings = async (req, res) => {
  try {
    const earningsData = await Earnings.find();
    res.status(200).json(earningsData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
