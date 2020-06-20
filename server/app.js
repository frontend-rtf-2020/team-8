import express from 'express';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import profileRoutes from './routes/profile.routes';
import chatRoutes from './routes/chat.routes';
import path from 'path';

import connectDB from './config/db';


const app = express();

//Connect Database
connectDB();

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Define Routes
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/', profileRoutes);
app.use('/', chatRoutes);

if (process.env.NODE_ENV = "production") {
    app.use(express.static("client/build"));""
    app.get("*", (req, res) => {


        res.sendFile(path.resolve(__dirname, "../..", "client", "build", "index.html"));
    })
}

export default app;