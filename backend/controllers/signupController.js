const Signup = require('../models/Signup');

exports.createSignup = async (req, res) => {
  try {
    const newSignup = new Signup(req.body);
    await newSignup.save();
    res.status(201).json(newSignup);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
