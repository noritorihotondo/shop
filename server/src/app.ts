import express, {Request, Response} from 'express';
import 'dotenv/config';

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shop',
}

let con = null;

const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})