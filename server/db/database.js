import mongoose from 'mongoose';


const URL = "mongodb+srv://dishantEcommerce:nivatauja@cluster0.sejlsni.mongodb.net/interview_prep_2024?retryWrites=true&w=majority&appName=Cluster0";

export const Database = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connected to MongoDB Database");
        
    } catch (error) {
        console.log("Error while connecting to MongoDb Database");
        
    }
}