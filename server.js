const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

dotenv.config();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1", require("./routes/studentsRoute"));

app.get('/testapi', (req, res) => {
    res.send('Hello World!');
});

//start server
const parsedPort = parseInt(process.env.PORT, 10);
const PORT = Number.isInteger(parsedPort) ? parsedPort : 3000;

//conditional listien
mySqlPool.query('select 1').then(()=> {
    console.log(`MySQL DB Connected`.red.bold.bgGreen);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`.red.bold.bgGreen);
    });
}).catch((error)=> {
    console.log(`Error in DB onnection`.green.bold.bgGreen);
});

