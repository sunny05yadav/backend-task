import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
