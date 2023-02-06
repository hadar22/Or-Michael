import mongoose from 'mongoose';
import Coordinator from './Coordinator';

const VolunteerAdSchema = new mongoose.Schema(
  {
    organizerCoordinator: {
      type: Coordinator,
    },
    title: {
      type: String,
      require: true,
      unique: true,
    },
    hospital: {
      type: String,
    },

    volunteeringDate: {
      type: Date,
      require: true,
    },

    describe: {
      type: String,
    },

    photo: {
      type: String,
    },
    volunteersNumber: {
      type: Number,
    },
    missingVolunteersNumber: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('VolunteerAdSchema', VolunteerAdSchema);
