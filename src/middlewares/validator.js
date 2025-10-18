const validator = (schema) => {
  return (req, res, next) => {
    console.log("req.body",req.body)
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        message: "Validation error",
        details: error.details.map((err) => err.message),
      });
    }
    next();
  };
};

export default validator;
