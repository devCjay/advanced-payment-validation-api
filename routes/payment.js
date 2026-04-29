const express = require("express");
const router = express.Router();
const ajv = require("../validators/ajvValidator");

const validate = ajv.getSchema("payment.schema.json");

router.post("/initiate", (req, res) => {
  const valid = validate(req.body);

  if (!valid) {
    return res.status(400).json({
      message: "Validation error",
      errors: validate.errors
    });
  }

  return res.json({
    message: "Payment validated successfully",
    data: req.body
  });
});

module.exports = router;