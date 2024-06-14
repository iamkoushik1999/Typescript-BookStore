import express from 'express';
import compression from 'compression';
import 'dotenv/config';
// Connection
import connectDB from "./config/db";
connectDB();

// App
const app = express();

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Export
export default app;
