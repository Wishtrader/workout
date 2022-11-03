import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';

/* Routes */
import userRoutes from './routes/userRoutes.js';

/* Config */
import { connectDB } from "./config/db.js";

/* Middleware */
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();

if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
