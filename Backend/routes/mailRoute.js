import express from "express";
import sendEmailOTP from "../Services/emailservices.js";
import { EmailController } from "../controllers/Email.controller.js";
const Emailrouter = express.Router();

Emailrouter.route("/emailsender").post(EmailController);

export default Emailrouter;
