const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProduct,
  addToCart,
  getCart,
  removeFromCart,
} = require("../Controller/Control");

router.post("/addproduct", addProduct);
router.get("/get", getProduct);
router.post("/add-to-cart", addToCart);
router.get("/get-cart", getCart);
router.delete("/delete-from-cart/:id", removeFromCart);
module.exports = router;
