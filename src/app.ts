import express from "express";
import cors from "cors";
import routes from "./routes";
import morgan from 'morgan';
import userRoutes from './routes/UserRoutes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', routes)
app.use('/api/user', userRoutes);

export default app;
