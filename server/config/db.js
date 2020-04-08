import mongoose from 'mongoose';
import config from '../config/config' 
import 'babel-polyfill';

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("mongo connected!");
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}

export default connectDB;