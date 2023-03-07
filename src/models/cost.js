const mongoose = require("mongoose");
const { Schema } = mongoose;

const costSchema = new Schema({
  article: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  data: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Cost = mongoose.model("Cost", costSchema);
