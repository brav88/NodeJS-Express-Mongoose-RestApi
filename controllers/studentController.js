const Student = require('../models/student')

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
};

const getStudentsById = async (req, res) => {
    try {
        const { id } = req.params;

        const students = await Student.findById(id);
        res.status(200).json(students);
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
};

const saveStudent = async (req, res) => {
    try {

        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();

        res.status(201).json(savedStudent);
    }
    catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        
        res.status(200).json({ 
            message: "Student deleted", 
            student: deletedStudent 
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {                        
        const updateData = req.body;
        
        const updatedStudent = await Student.findOneAndUpdate(
            { _id: updateData._id },       
            updateData,        
            { 
                new: true,     
                runValidators: true
            }
        );
        
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        
        res.status(200).json({
            message: "Student updated",
            student: updatedStudent
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getStudents, saveStudent, deleteStudent, updateStudent, getStudentsById };