import mongoose from 'mongoose';

const VolunteerAdSchema = new mongoose.Schema(
  {
    organizerCoordinator: {
      type: Schema.Types.ObjectId,
      ref: 'Coordinator',
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
      require: true,
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

module.exports = mongoose.model('VolunteerAdSchema', VolunteerAdSchema);
