const Joi = require("joi");
const { HttpCode } = require("../helpers/constants");

const schemaCreateReview = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z ]+$/)
    .min(3)
    .max(30)
    .required(),

  descr: Joi.string()
    .regex(/^[a-zA-Z0-9,. ]*$/)
    .min(5)
    .max(200)
    .required(),
});

const validate = (schema, body, next) => {
  const { error } = schema.validate(body);
  if (error) {
    const [{ message }] = error.details;
    return next({
      status: HttpCode.BAD_REQUEST,
      message: `Field: ${message.replace(/"/g, "")}`,
      data: "Bad Request",
    });
  }
  next();
};

module.exports.validateCreateReview = (req, res, next) => {
  return validate(schemaCreateReview, req.body, next);
};
