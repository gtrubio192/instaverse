import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';    // instaverse :: instaverse123
import cors from 'cors';
import 'dotenv/config';

import postRoutes from './routes/posts.js';

const app = express()

app.use(bodyParser.json({ limit: '32mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '32mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes)

const CONNECTION_URL = process.env.MONGO_DB_URL

const PORT = process.env.PORT || 5000

// , { useNewURLParser: true, useUnifiedTopology: true }
mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch(err => console.log(err.message))