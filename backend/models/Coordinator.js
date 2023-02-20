import mongoose from "mongoose";
import bcrypt from "bcrypt";

const CoordinatorSchema = new mongoose.Schema(
  {
    volunteerAd: [{ type: mongoose.Types.ObjectId, ref: "VolunteerAdSchema" }],

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
    password: {
       type: String, required: true },
  },
  {
    timestamps: true,
  }
);
CoordinatorSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

CoordinatorSchema.pre('save',async function(next){
    if(!this.isModified){
        next()
    }
   const salt = await  bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password,salt)
})

export const Coordinator = mongoose.model(
  "CoordinatorSchema",
  CoordinatorSchema
);
