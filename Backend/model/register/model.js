const mongoose = require("mongoose");
const registerSchema = require("./schema");

module.exports = mongoose.model("registerSchema", registerSchema);
