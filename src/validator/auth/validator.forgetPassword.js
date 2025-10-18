import Joi from "joi";

const forgetPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

export default forgetPasswordSchema;
