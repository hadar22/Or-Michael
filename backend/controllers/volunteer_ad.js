// import expressAsyncHandler from 'express-async-handler';
import { VolunteerAd } from '../models/VolunteerAd.js';
import { createCustomError } from '../errors/custom_error.js';

//Get all volunteer ads
const getAllVolunteerAds = async (req, res) => {
  try {
    const volunteer_ads = await VolunteerAd.find();
    res.status(200).json({ volunteer_ads });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Get volunteer ad
const getVolunteerAd = async (req, res, next) => {
  try {
    const { id: volunteer_adID } = req.params;
    const volunteer_ad = await VolunteerAd.findOne({ _id: taskID });
    if (!volunteer_ad) {
      return next(
        createCustomError(`No volunteer ad with id: ${volunteer_adID}`, 404)
      );
    }
    res.status(200).json({ volunteer_ads });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Create volunteer ad
const createNewVolunteerAd = async (req, res) => {
  try {
    const volunteer_ad = await VolunteerAd.create(req.body);
    res.status(201).json({ volunteer_ad });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Update volunteer ad
const updateVolunteerAd = async (req, res, next) => {
  try {
    const { id: volunteer_adID } = req.params;
    const volunteer_ad = await VolunteerAd.findOneAndUpdate(
      { _id: volunteer_adID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!volunteer_ad) {
      return next(
        createCustomError(`No volunteer ad with id: ${volunteer_adID}`, 404)
      );
    }
    res.status(200).json({ volunteer_ad });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Delete volunteer ad
const deleteVolunteerAd = async (req, res, next) => {
  try {
    const { id: volunteer_adID } = req.params;
    const volunteer_ad = await VolunteerAd.findOneAndDelete({
      _id: volunteer_adID,
    });
    if (!volunteer_ad) {
      return next(
        createCustomError(`No volunteer ad with id: ${volunteer_adID}`, 404)
      );
    }
    res.status(200).json({ volunteer_ad });
  } catch (error) {
    res.status(400).json({ error });
  }
};
export {
  getAllVolunteerAds,
  getVolunteerAd,
  createNewVolunteerAd,
  updateVolunteerAd,
  deleteVolunteerAd,
};
