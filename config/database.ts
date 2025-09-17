import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URL || "mongodb://localhost:27017/comicsdb";
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB conectado com sucesso!");
    } catch (err) {
        console.log("Erro ao conectar no MongoDB", err);
        process.exit(1);
    }
}