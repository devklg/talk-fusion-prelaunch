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

exports.getSignups = async (req, res) => {
  try {
    const signups = await Signup.find();
    res.status(200).json(signups);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateSignup = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSignup = await Signup.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedSignup);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteSignup = async (req, res) => {
  try {
    const { id } = req.params;
    await Signup.findByIdAndDelete(id);
    res.status(200).json({ message: 'Signup deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
