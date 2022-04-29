import Joi from "joi"


//User sceme validator
export const createUserValidator = Joi.object({
    firstName: Joi.string().min(1).max(20).required(),
    lastName: Joi.string().min(1).max(20).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(8).max(25).required(),
    birthYear: Joi.number().integer().min(1900).max(2022),
    verified: Joi.string(),
  });
  //User sceme validator