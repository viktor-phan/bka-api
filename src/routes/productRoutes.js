import express from "express";
import Product from "../models/Product.js";
const router = express.Router();

router.route("/api/product").get(async (req, res) => {
  try {
    const products = await Product.find();
    console.log("Calling to product dataset");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.route("/api/product-with-ids").post(async (req, res) => {
  try {
    console.log(req.body.ids);
    const products = await Product.find({ _id: { $in: req.body.ids } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.route("/api/product/:id").get(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log("Calling to product dataset");
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.route("/api/product").post(async (req, res) => {
  req.body.price = parseFloat(req.body.price);
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json({ message: "success", data: savedProduct._id });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.route("/api/product/:id").put(async (req, res) => {
  try {
    const savedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ message: "success", data: savedProduct._id });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.route("/api/product/:id").delete(async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
