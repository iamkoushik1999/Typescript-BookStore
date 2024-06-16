import express from 'express';
import compression from 'compression';
import 'dotenv/config';
// Connection
import connectDB from "./config/db";
connectDB();
// Routes
import authorRoutes from "./routes/authorRoutes";
import bookRoutes from "./routes/bookRoutes";
import categoryRoutes from "./routes/categoryRoutes";

// App
const app = express();

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", authorRoutes);
app.use("/api", bookRoutes);
app.use("/api", categoryRoutes);

// Export
export default app;
