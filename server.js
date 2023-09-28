import { app } from "./app.js";
import { connectDB } from "./database/database.js";
import { isAuthenticated } from "./middlewares/auth.js";

// * Initializing Database

connectDB();

// * Initializing Server
const PORT = process.env.PORT;

app.get("/", isAuthenticated, (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
