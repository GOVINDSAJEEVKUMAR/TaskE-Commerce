const express = require("express");
const Pro = require("../Models/Mode");
const Cart = require("../Models/cartModel");

const addProduct = async (req, res) => {
  const { name, image, price } = req.body;
  try {
    const Product = {
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
    };
    let result = await Pro.create({
      name: name,
      image: image,
      price: price,
    });
    res.status(200).send({ success: true, msg: "Success", data: Product });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const GetProduct = await Pro.find({});
    res.status(200).json({ GetProduct });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addToCart = async (req, res) => {
  const { productID } = req.body;
  try {
    await Cart.create({ product: productID });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({}).populate("product");
    res.status(200).json({ cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const removeFromCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Cart.findByIdAndDelete(id);
    res.status(200).json({ sucess: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  addProduct,
  getProduct,
  addToCart,
  getCart,
  removeFromCart,
};
