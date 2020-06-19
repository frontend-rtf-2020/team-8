import mongoose from 'mongoose';
import config from '../config/config' 

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log("mongo connected!");
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}

export default connectDB;