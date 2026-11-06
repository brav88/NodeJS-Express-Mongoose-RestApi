const express = require('express');
const connectDB = require('./config/database');
const studentRoute = require('./routes/studentRoute');
const app = express();

app.use(express.json());
app.use('/api/students', studentRoute);

const startServer = async () => {
    try {

        await connectDB();

        app.listen(3000, () => {
            console.log('Server is running on PORT 3000')
        });
    }
    catch (error) {
        console.log(error.message);
    }
};

startServer();