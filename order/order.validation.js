import Joi from "joi"


//order sceme validator
export const ordersValidator = Joi.object({
    nameOfOrder: Joi.string().min(1).max(20).required(),
    price: Joi.number().min(0.01).required(),
    quantity: Joi.number().integer().min(1).max(99999).required(),
    userId:Joi.number().required(),
});
  //order sceme validator