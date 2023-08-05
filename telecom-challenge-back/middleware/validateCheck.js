const { validationResult } = require("express-validator");

const validateChecks = (req, res, next) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    next();
  } else {
    res.status(402).json(error);
  }
};

module.exports = validateChecks;
