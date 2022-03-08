import express from 'express';
import { BasicAuth } from '../middlewares/BasicAuth';
const router = express.Router();
import { registration } from '../controllers/users';

router.post("/", BasicAuth, registration);

export default router;