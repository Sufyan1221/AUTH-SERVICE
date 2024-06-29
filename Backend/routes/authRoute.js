import express from 'express';
import  registerController from '../controllers/Auth/register.controller.js';
import  loginController  from '../controllers/Auth/login.controller.js';
import upload from '../middlewares/fileHandlerMulter.js';
// import { validator } from '../middlewares/validators.js';

const authRoutes = express.Router();

authRoutes.post('/register', upload.single('img'), registerController.register);
authRoutes.post('/login', loginController.login);

export default authRoutes;
