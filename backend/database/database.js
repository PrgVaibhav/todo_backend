import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "TODOAPP",
    })
    .then((c) =>
      console.log(`Database is connected and working with ${c.connection.host}`)
    )
    .catch((err) => console.error(err));
};
