import express from 'express';
const router = express.Router();
import {
  getAllCoordinator,
  getCoordinator,
  createNewCoordinator,
  updateCoordinator,
  deleteCoordinator,
} from '../controllers/coordinator.js';

router.post('/', createNewCoordinator);
router.get('/', getAllCoordinator);
router.get('/:id', getCoordinator);
router.patch('/:id', updateCoordinator);
router.delete('/:id', deleteCoordinator);

export default router;
