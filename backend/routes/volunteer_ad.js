import express from 'express';
const router = express.Router();

import {
  createNewVolunteerAd,
  getAllVolunteerAds,
  getVolunteerAd,
  updateVolunteerAd,
  deleteVolunteerAd,
} from '../controllers/volunteer_ad.js';

router.route('/').post(createNewVolunteerAd).get(getAllVolunteerAds);

router
  .route('/:id')
  .get(getVolunteerAd)
  .patch(updateVolunteerAd)
  .delete(deleteVolunteerAd);

export default router;
