const { check } = require("express-validator");
const { validatorResult } = require("./validation-result");

const validationAddCost = [
  check("article")
    .isString()
    .trim()
    .notEmpty(),
  check("amount")
    .isNumeric()
    .isInt({min:1}),
    validatorResult
];

const validationEditCost = [
  check("article")
    .isString()
    .trim()
    .notEmpty(),
  check("amount")
    .isNumeric()
    .isInt({min:1}),
  check("date")
    .isISO8601(),
    validatorResult
];

module.exports = {
  validationAddCost,
  validationEditCost
};
