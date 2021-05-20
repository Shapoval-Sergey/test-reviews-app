const Joi = require("joi");
const { HttpCode } = require("../helpers/constants");

const schemaCreateReview = Joi.object({
  name: Joi.string().alphanum().min(2).max(30).required(),

  descr: Joi.string().alphanum().min(10).max(300).required(),
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