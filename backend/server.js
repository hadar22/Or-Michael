import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import volunteer_ad from './routes/volunteer_ad.js';
import coordinator from './routes/coordinator.js';
import cors from 'cors'
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}...✅ `));

// // Routes
// app.use('/api/v1/', (req, res) => {
//   res.send('Or-Michael Server API_v1');
// });

app.use(`/api/v1/volunteer/ad`, volunteer_ad);
app.use(`/api/v1/admin`, coordinator);

// MongoDB Setup
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(`Connected to MongoDB ✅`))
  .catch((error) => console.log(` ❌MongoDB connection error: ${error}`));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('db connected');
// });
