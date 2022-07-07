import express, {Request, Response} from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.NODE_ENV)

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})