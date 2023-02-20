// import expressAsyncHandler from 'express-async-handler';
import { Coordinator } from '../models/Coordinator.js';
import { createCustomError } from '../errors/custom_error.js';
import  asyncHandler  from 'express-async-handler';
import {generateToken} from '../config/generateToken.js'

//Login User

const authUser = asyncHandler(async(req,res)=>{
  const {name,password} = req.body
  console.log(name+" "+password);
  const user = await Coordinator.findOne({name})
  if(user && await user.matchPassword(password) ){
     res.status(201).json({
         _id:user._id,
         name:user.name,
         token: generateToken(user._id)
     })
  }else{
     res.status(401)
     .json("Wrong name or Password")
  }
})

//Get all Coordinator
const getAllCoordinator = async (req, res) => {
  try {
    const coordinators = await Coordinator.find();
    res.status(200).json({ coordinators });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Get coordinator ad
const getCoordinator = async (req, res) => {
  try {
    const { id: coordinatorID } = req.params;
    const coordinator = await Coordinator.findOne({ _id: taskID });
    if (!coordinator) {
      createCustomError(`No coordinator with id: ${coordinatorID}`, 404);
    }
    res.status(201).json({ coordinator });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Create coordinator ad
const createNewCoordinator = async (req, res) => {
  try {
    console.log(1111);
    const coordinator = await Coordinator.create(req.body);
    res.status(201).json({ coordinator });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Update coordinator ad
const updateCoordinator = async (req, res, next) => {
  try {
    const { id: coordinatorID } = req.params;
    const coordinator = await Coordinator.findOneAndUpdate(
      { _id: coordinatorID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!coordinator) {
      return next(
        createCustomError(`No coordinator with id: ${coordinatorID}`, 404)
      );
    }
    res.status(200).json({ coordinator });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Delete coordinator ad
const deleteCoordinator = async (req, res, next) => {
  try {
    const { id: coordinatorID } = req.params;
    const coordinator = await Coordinator.findOneAndDelete({
      _id: coordinatorID,
    });
    if (!coordinator) {
      return next(
        createCustomError(`No coordinator ad with id: ${coordinatorID}`, 404)
      );
    }
    res.status(200).json({ coordinator });
  } catch (error) {
    res.status(400).json({ error });
  }
};
export {
  getAllCoordinator,
  getCoordinator,
  createNewCoordinator,
  updateCoordinator,
  deleteCoordinator,
  authUser
};
