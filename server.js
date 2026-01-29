import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();


const app = express();
const PORT = 3000;
const BASE_URL = "https://api.thedogapi.com/v1";


// Serve frontend
app.use(express.static(path.join(__dirname, "public")));
