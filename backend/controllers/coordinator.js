// import expressAsyncHandler from 'express-async-handler';
import { Coordinator } from '../models/Coordinator.js';
import { createCustomError } from '../errors/custom_error.js';

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
};
