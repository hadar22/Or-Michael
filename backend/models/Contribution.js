import mongoose from 'mongoose';

const Contribution = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Contribution', Contribution);
