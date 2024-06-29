import Joi from 'joi';

const validator = Joi.object({
  username: Joi.string()
    .min(6) 
    .max(30)
    .pattern(new RegExp(/^[a-zA-Z\-]+$/))
    .messages({
      "string.base": `Username must be a string`,
      "string.empty": `Username cannot be an empty field`,
      "string.min": `Username should have a minimum length of 6`,
      "string.max": `Username should have a maximum length of 30`,
      "string.pattern.base": `Username can only contain letters and hyphens`,
    })
    .required(),
  
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .messages({
      "string.empty": `Email cannot be an empty field`,
      "string.email": `Email should be a valid email address`,
    })
    .required(),
  
  password: Joi.string()
    .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
    .messages({
      "string.base": `Password must be a string`,
      "string.empty": `Password cannot be an empty field`,
      "string.pattern.base": `Password must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long`,
    })
    .required(),
  
  confirm_password: Joi.any()
    .valid(Joi.ref('password'))
    .messages({
      "any.only": `Confirm password must match password`,
      "any.required": `Confirm password is required`,
    })
    .required(),
});

export default validator;



// const validations = Joi.object({
//     username: Joi.string()
//       .min(6)
//       .max(30)
//       .pattern(new RegExp(/^[a-zA-Z\-]+$/))
//       .messages({
//         "string.base": `username must be a string`,
//         "string.empty": `username cannot be an empty field`,
//         "string.min": `username should have a minimum length of 6`,
//       })
//       .required(),
//     email: Joi.string()
//       .email({
//         minDomainSegments: 2,
//         tlds: { allow: ["com", "net"] },
//       })
//       .messages({
//         "string.empty": `email cannot be an empty field`,
//         "string.email": `user should have valid email`,
//       })
//       .required(),
//     password: Joi.string()
//       .pattern(
//         new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
//       )
//       .min(8)
//       .messages({
//         "string.empty": `password cannot be an empty field`,
//         "string.min": `password should have a minimum length of 8`,
//       })
//       .required(),
//     confirm_password: Joi.ref("password"),
//   });
