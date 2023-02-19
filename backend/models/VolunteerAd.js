import mongoose from 'mongoose';

const VolunteerAdSchema = new mongoose.Schema(
  {
    // organizerCoordinator: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'CoordinatorSchema',
    // },
    organizerCoordinator: {
      type: String,
    },
    title: {
      type: String,
      require: true,
    },
    hospital: {
      type: String,
    },
    volunteeringTime: {
      type: String,
    },
    volunteeringDate: {
      type: String,
    },

    describe: {
      type: String,
    },

    photo: {
      type: String,
    },
    volunteersNumber: {
      type: String,
    },
    //how many volunteers missing
    // volunteers: [{ type: mongoose.Types.ObjectId, ref: 'VolunteerSchema' }],
    volunteers: [String],
  },
  {
    timestamps: true,
  }
);

export const VolunteerAd = mongoose.model(
  'VolunteerAdSchema',
  VolunteerAdSchema
);
