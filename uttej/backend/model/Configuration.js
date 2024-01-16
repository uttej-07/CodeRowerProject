const mongoose = require("mongoose");
const ConfigurationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: {
    type: [String],
    required: true,
  },
  remark: {
    type: String,
  },
});

module.exports = mongoose.model("Configuration", ConfigurationSchema);
