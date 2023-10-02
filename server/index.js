import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Router from "./routes/route.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//middlewRE
app.use(bodyParser.json({extended :true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use('/',Router);

// Call the Connection function from the database file to connect to the database
Connection();

console.log('hello');


