import mongoose from 'mongoose';

const HospitalizedSchema = new mongoose.Schema(
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

    hospitalizedPreferences: [
      { type: mongoose.Types.ObjectId, ref: 'VolunteerAdSchema' },
    ],

    responsibleCoordinator: {
      type: mongoose.Types.ObjectId,
      ref: 'Coordinator',
    },
  },
  {
    timestamps: true,
  }
);

export const Hospitalized = mongoose.model(
  'HospitalizedSchema',
  HospitalizedSchema
);
