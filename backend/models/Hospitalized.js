import mongoose from 'mongoose';

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
      type: Array[{ type: Schema.Types.ObjectId, ref: 'Preference' }],
    },
    responsibleCoordinator: {
      type: Schema.Types.ObjectId,
      ref: 'Coordinator',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Hospitalized', Hospitalized);
