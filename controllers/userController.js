const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newUser = new User({ name, email, message });
    await newUser.save();

    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
