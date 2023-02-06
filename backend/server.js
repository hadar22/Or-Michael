import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5002;
app.use('/api/v1/', (req, res) => {
  res.send('Or-Michael Server API_v1');
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}...✅ `));

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(`Connected to MongoDB ✅`))
  .catch((error) => console.log(` ❌MongoDB connection error: ${error}`));
