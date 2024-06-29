// backend/routes/paymentRoutes.js
import express from 'express';
import { PaymentController } from '../controllers/Payment.Controller';

const paymentroute = express.Router();
paymentroute.route('/create-checkout-session').post(PaymentController);

export default paymentroute;
