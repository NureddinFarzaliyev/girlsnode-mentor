const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
} = require("../controllers/product.controller");
const { upload } = require("../middlewares/multer.middleware");
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", upload.array("files", 5), createProduct);

module.exports = { productRouter };
