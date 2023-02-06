import mongoose from 'mongoose';

const Hospitalized = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Hospitalized', Hospitalized);
