import express from 'express';
import cookieParser from 'cookie-parser';
import auth from './routes/api/auth';
import users from './routes/api/users';
import path from 'path'

import connectDB from './config/db';


const app = express();

//Connect Database
connectDB();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Define Routes
app.use('/api/users', users);
app.use('/api/auth', auth);


export default app;