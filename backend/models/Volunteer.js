import mongoose from 'mongoose';

const Volunteer = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Volunteer', Volunteer);
