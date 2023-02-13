import mongoose from 'mongoose';

const ContributionSchema = new mongoose.Schema(
  {
    organizationName: {
      type: String,
      require: true,
    },
    contact: {
      type: String,
      require: true,
    },
    contributionPreferences: [
      { type: mongoose.Types.ObjectId, ref: 'Preference' },
    ],

    textArea: {
      type: String,
    },
    isPay: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export const Contribution = mongoose.model(
  'ContributionSchema',
  ContributionSchema
);
