import express from "express";
import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import indexRouter from "./routes/main.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files
app.use(express.static(__dirname + '/public'));

// Allow to use req.body as an object
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);

// Port Listening
app.listen(3000, () => {
    console.log("Running server on Port 3000.");
});