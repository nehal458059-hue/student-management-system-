const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/students');

const Student = mongoose.model('Student', {
  name: String,
  roll: String,
  department: String,
  email: String
});

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
