
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
export default async function connectMongoDB() {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("MONGODB connected");
	} catch (error) {
		console.log("Error connecting to MongoDB: ", error.message);
	}
}
