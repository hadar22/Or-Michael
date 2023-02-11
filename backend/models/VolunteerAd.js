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
    volunteeringTime: {
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
    //how many volunteers missing
    volunteers: [{ type: mongoose.Types.ObjectId, ref: 'VolunteerSchema' }],
  },
  {
    timestamps: true,
  }
);

export const VolunteerAd = mongoose.model(
  'VolunteerAdSchema',
  VolunteerAdSchema
);
