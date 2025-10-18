import Joi from "joi";

const signupSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

export default signupSchema;
