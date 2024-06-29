import { Error } from "mongoose";
import  customErrorHandler  from "../services/customErrorHandler.js";
// const {ValidationError}  = require("Joi")
 const errorHandler = (err, req, res, next) => {
  let statuscode = 500;
  let data = {
    message: "Internal Server Error",
    originalMessage: err.message,
  };
  
  if (err instanceof customErrorHandler) {
    (statuscode = err.statuscode),
      (data = {
        message: err.message,
        ...(err.accessToken==null && {accessToken: err.accessToken})
      });
  }
  if (err.name == "ValidationError") {
    (statuscode = 403),
      (data = {
        message: err.message ,
      });
  }

  if (err instanceof Error)
    res.status(statuscode).json({
      msg: err.message,
    });

  res.status(statuscode).send(data);
};

export default errorHandler;
