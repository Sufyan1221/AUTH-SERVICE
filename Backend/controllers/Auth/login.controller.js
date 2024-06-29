import jwt from "jsonwebtoken";
import  userModel  from '../../models/UserModel.js';
import  customErrorHandler  from "../../services/customErrorHandler.js";
import bcrypt from "bcrypt";

const loginController = {
  async login(req, res, next) {
    // check whether this user email is exist or not
    const checkEmail = await userModel.findOne({ email: req.body.email });

    if (!checkEmail) {
      return next(customErrorHandler.Usernotfound("User not found"));
    }

    // Check valid password
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      checkEmail.password
    );

    if (!isPasswordValid) {
      return next(customErrorHandler.invalidcredentials("Invald Credentials"));
    }

    var token = jwt.sign(
      {
        id: checkEmail._id,
        email: checkEmail.email,
        password: checkEmail.password,
      },
      process.env.API_SECRET_KEY,
      {
        expiresIn: 30,
      }
    );

    return res.json({
      user: {
        id: checkEmail._id,
        email: checkEmail.email,
        password: checkEmail.password,
      },
      token: token,
    });
  },
};

export default loginController;
