import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5002;
app
  .use('/api/v1/', (req, res, next) => {
    res.send('Or-Michael Server API_v1');
  })
  .listen(PORT);cd
