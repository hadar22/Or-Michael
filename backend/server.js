import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import volunteer_ad from './routes/volunteer_ad.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}...✅ `));

// // Routes
// app.use('/api/v1/', (req, res) => {
//   res.send('Or-Michael Server API_v1');
// });

app.use(`/api/v1/volunteer/ad`, volunteer_ad);

// MongoDB Setup
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(`Connected to MongoDB ✅`))
  .catch((error) => console.log(` ❌MongoDB connection error: ${error}`));
