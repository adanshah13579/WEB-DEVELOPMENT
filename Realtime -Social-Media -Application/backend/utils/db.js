import mongoose from "mongoose";

const db_connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database_connected");
  } catch (err) {
    console.log(err);
  }
};

export default db_connection;
