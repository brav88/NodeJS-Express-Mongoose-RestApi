const express = require('express');
const router = express.Router();

const { getStudents, saveStudent, deleteStudent, updateStudent, getStudentsById } = require('../controllers/studentController');

router.get('/', getStudents);
router.get('/:id', getStudentsById);
router.post('/', saveStudent);
router.delete('/:id', deleteStudent);
router.put('/', updateStudent);

module.exports = router;