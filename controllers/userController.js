// controllers/userController.js
const User = require('../models/User');

const contactUser = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { name, email, message } = req.body;
    const newUser = await User.create({ name, email, message });
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.error("Backend error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { contactUser };
