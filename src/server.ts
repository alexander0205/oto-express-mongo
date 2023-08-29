import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';
import { connectToDatabase } from './utils/database';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(bodyParser.json());

app.use(userRoutes);

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
