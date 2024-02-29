const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Beauty",
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
