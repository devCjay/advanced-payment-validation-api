const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Load schemas
const paymentSchema = require("../schemas/payment.schema.json");
const transactionSchema = require("../schemas/transaction.schema.json");

// Register schemas
ajv.addSchema(paymentSchema, "payment.schema.json");
ajv.addSchema(transactionSchema, "transaction.schema.json");

module.exports = ajv;