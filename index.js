import express from "express";
import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import mainRouter from "./routes/main.js"
import messageRouter from "./routes/message.js"

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", mainRouter);
app.use("/new", messageRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})