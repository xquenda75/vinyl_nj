import dotenv from 'dotenv';
import express from 'express';
import apiRoutes from './routes/index.js';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();
const app = express();

//middlewares
//app.set('case sensitive routing', true);
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(apiRoutes);


app.listen(3000);
console.log('Server on port', 3000);