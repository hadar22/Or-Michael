import mongoose from 'mongoose';

const VolunteerAdSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('VolunteerAdSchema', VolunteerAdSchema);
