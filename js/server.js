const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json()); // Parse JSON requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String, // Store hashed passwords
});
const User = mongoose.model('User', userSchema);

// Key schema
const keySchema = new mongoose.Schema({
  key: { type: String, unique: true },
  used: { type: Boolean, default: false }, // Track if the key has been used
});
const Key = mongoose.model('Key', keySchema);

// Registration route
app.post('/api/register', async (req, res) => {
  const { username, password, key } = req.body;

  // Check if username is already taken
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username is already taken' });
  }

  // Validate key
  const validKey = await Key.findOne({ key, used: false });
  if (!validKey) {
    return res.status(400).json({ message: 'Invalid or already used key' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the new user
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  // Mark the key as used
  validKey.used = true;
  await validKey.save();

  res.status(201).json({ message: 'Registration successful' });
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
mongod
