import mongoose from "mongoose";

async function dbConnect() {
  return await mongoose.connect(process.env.MONGODB_URI);
}

export default dbConnect;

// Here, we're creating an asynchronous function that uses mongoose to connect to the MongoDB database.
// We will call this function whenever we need to perform database operations.
