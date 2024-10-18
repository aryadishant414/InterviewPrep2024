import express from 'express';
import { RegisterUserController } from '../controllers/user-controller.js';

const router = express.Router();

router.route("/register").post(RegisterUserController);


export default router;