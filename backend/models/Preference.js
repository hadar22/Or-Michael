import mongoose from 'mongoose';

const Preference = new mongoose.Schema({
  preference: {
    type: String,
    require: true,
  },
  modleType: {
    type: String, // v/h/c
    require: true,
  },
});

module.exports = mongoose.model('Preference', Preference);
