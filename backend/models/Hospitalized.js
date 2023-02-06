import mongoose from 'mongoose';
import Preference from './Preference';

const Hospitalized = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    age: {
      type: String,
    },
    sex: {
      type: String,
    },
    isHospitalized: {
      type: Boolean,
    },
    hospital: {
      type: String,
    },
    hospitalizedRequest: {
      type: String,
      require: true,
    },

    hospitalizedPreferences: {
      type: Array[Preference],
    },
    responsibleCoordinator: {
      type: Coordinator,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Hospitalized', Hospitalized);
