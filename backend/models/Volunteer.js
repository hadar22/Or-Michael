import mongoose from 'mongoose';

const VolunteerSchema = new mongoose.Schema(
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
      type: Array[{ type: mongoose.Types.ObjectId, ref: 'Preference' }],
    },
    responsibleCoordinator: {
      type: mongoose.Types.ObjectId,
      ref: 'CoordinatorSchema',
    },
  },
  {
    timestamps: true,
  }
);

export const Volunteer = mongoose.model('VolunteerSchema', VolunteerSchema);
