import { response } from 'express';
import  customErrorHandler  from "../../services/customErrorHandler.js";
import bcrypt from "bcrypt"
import { cloudinary } from "../../services/cloudinary.js";
import validator from '../../services/validation.js';
import  userModel  from '../../models/UserModel.js';
import { configDotenv } from 'dotenv';
configDotenv()

const registerController = {
  async register(req, res, next) {
    const { username, email, password } = req.body;

    const exists = await userModel.findOne({ email: email });
    console.log(exists);
    if (exists)
      return next(customErrorHandler.alreadyexist("Email already exists"));

    
    const { error } = validator.validate(req.body);

    if (error) return next(error);

    // Encrypt Password to save in db
    const saltRounds = 10;
    const passwordhash = await bcrypt.hash(password, saltRounds);

    // cloudinary service
    let imgurl;
    if (req?.file?.path) {
      imgurl = await cloudinary(req.file.path)
    }

    // save data in db

    const data = new userModel({
      username: username,
      email: email,
      password: passwordhash,
      ...(imgurl && { profile_imgURL: imgurl?.secure_url }),
    });

    data
      .save()
      .then(() => {
        return res.status(201).send({
          msg: "Data saved",
        });
      })
      .catch((err) => {
        return next(customErrorHandler.DatanotSaved(err));
      });
  },
};

export default registerController;
