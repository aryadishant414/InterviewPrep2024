import express from 'express';
import { addToDOListController, getAllToDosController, RegisterUserController } from '../controllers/user-controller.js';


const router = express.Router();

router.route("/register").post(RegisterUserController);
router.route("/todo").post(addToDOListController);
router.route("/getAllToDos").get(getAllToDosController);


export default router;