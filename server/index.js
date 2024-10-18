import express from 'express';
import { Database } from './db/database.js';
import bodyParser from 'body-parser';
import Routes from './routes/Routes.js';


const app = express();
const PORT = 3000;


// bodyparser is a middleware
//below two lines are responsible to handle the incoming requests that are coming inside backend (Without these two lines our requests on backend will not be able to handle)
app.use(bodyParser.json({extended: true}));  //with the help of this line backend understands the JSON data and easily process it
app.use(bodyParser.urlencoded({extended: true}));


// app.use("/", (req, res) => {
//     res.status(200).send("<h1>Welcome to HomePage</h1>");
// })

app.use("/api/v1/auth", Routes);

app.listen(PORT, (error) => {
    if(!error) {
        console.log(`Server Started Successfully on Port ${PORT}`);
    }
    else {
        console.log(`Server Connection Failed due to this error : ${error}`);
    }
})

Database();