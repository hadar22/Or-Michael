import mongoose from 'mongoose';
import Coordinator from './Coordinator';
import Preference from './Preference';

const Volunteer = new mongoose.Schema(
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
    livingArea: {
      type: String,
    },
    textAboutMe: {
      type: String,
    },
    volunteerPreferences: {
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

module.exports = mongoose.model('Volunteer', Volunteer);
