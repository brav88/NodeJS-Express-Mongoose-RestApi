const mongoose = require('mongoose');

const connection = 'mongodb+srv://XXX:XXX@cluster0.vfi7une.mongodb.net/XXX';

const connectDB = async () => {
    try
    {
        await mongoose.connect(connection);        
        console.log("Base de datos actual:", mongoose.connection.name);
    }
    catch(error){
        console.log(error.message)
    }
};

module.exports = connectDB;