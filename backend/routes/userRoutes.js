import express, { Router } from 'express';

const router = express.Router();

router.route('./profile').get(getUserProfile);

export default router