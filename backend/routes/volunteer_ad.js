import express from 'express';
const router = express.Router();
import {
  createNewVolunteerAd,
  getAllVolunteerAds,
  getVolunteerAd,
  updateVolunteerAd,
  deleteVolunteerAd,
} from '../controllers/volunteer_ad.js';

router.post('/', createNewVolunteerAd);
router.get('/', getAllVolunteerAds);
router.get('/:id', getVolunteerAd);
router.patch('/:id', updateVolunteerAd);
router.delete('/:id', deleteVolunteerAd);

export default router;
