import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "TODOAPP"
    })
    .then(() => console.log(`Database is connected and working`))
    .catch((err) => console.error(err));
};
