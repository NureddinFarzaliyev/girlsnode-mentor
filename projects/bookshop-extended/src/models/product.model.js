const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    imageUrls: {
      type: [String],
      required: true,
    },
    tag: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Tag",
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

const createProduct = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().optional(),
  tag: Joi.string().required(),
  imageUrls: Joi.array().items(Joi.string()).required(),
});

const validateCreateProduct = (data) => {
  return createProduct.validate(data);
};

module.exports = { Product, validateCreateProduct };
