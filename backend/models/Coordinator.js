import mongoose from 'mongoose';

const Coordinator = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Coordinator', Coordinator);
