const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  _id: { 
    type: Number, 
    required: true 
  },
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  course: { 
    type: String, 
    required: true,
    trim: true 
  },
  grade: { 
    type: Number, 
    required: true,
    min: 0,
    max: 100 
  },
  active: { 
    type: Boolean, 
    default: true 
  }
}, {
  versionKey: false,
  collection: 'Students'
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;