import mongoose from 'mongoose';

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

module.exports = mongoose.model('Volunteer', Volunteer);
