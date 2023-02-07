import mongoose from 'mongoose';

const CoordinatorSchema = new mongoose.Schema(
  {
    volunteerAd: [{ type: mongoose.Types.ObjectId, ref: 'VolunteerAdSchema' }],

    name: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
    hospital: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Coordinator = mongoose.model(
  'CoordinatorSchema',
  CoordinatorSchema
);
