import { app } from "./app.js";
import { connectDB } from "./database/database.js";

// * Initializing Database

connectDB();

// * Initializing Server
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
