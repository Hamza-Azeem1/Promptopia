import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already Connected!');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'promptopia',
            useNewUriParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MongoDB Cnnected!')

    } catch (error) {
        console.log(error)
    }
}