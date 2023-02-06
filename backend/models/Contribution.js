import mongoose from 'mongoose';

const Contribution = new mongoose.Schema(
  {
    organizationName: {
      type: String,
      require: true,
    },
    contact: {
      type: String,
      require: true,
    },
    contributionPreferences: {
      type: Array[{ type: Schema.Types.ObjectId, ref: 'Preference' }],
    },
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

module.exports = mongoose.model('Contribution', Contribution);
