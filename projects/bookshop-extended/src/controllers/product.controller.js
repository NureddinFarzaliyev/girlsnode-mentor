const { Product, validateCreateProduct } = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("tag");
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("tag");
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const body = req.body;

    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ error: "At least one image is required" });
    }

    const imageUrls = files.map((file) => file.path);
    body.imageUrls = imageUrls;

    const { error } = validateCreateProduct(body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const newProduct = new Product(body);
    await newProduct.save();
    res.status(201).json({ data: newProduct });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getAllProducts, getProductById, createProduct };
