import mongoose from 'mongoose';

const VolunteerAdSchema = new mongoose.Schema(
  {
    organizerCoordinator: {
      type: mongoose.Types.ObjectId,
      ref: 'CoordinatorSchema',
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

export const VolunteerAd = mongoose.model(
  'VolunteerAdSchema',
  VolunteerAdSchema
);
