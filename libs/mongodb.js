import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('mongo connected');
    }
    catch (error) {
        console.log('error error');

    }
}

export default connectMongoDB;