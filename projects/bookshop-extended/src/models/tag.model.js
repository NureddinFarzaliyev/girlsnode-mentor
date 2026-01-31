const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Tag = mongoose.model("Tag", tagSchema);

// validate when creating tag

const createTag = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
});

const validateCreateTag = (data) => {
  return createTag.validate(data);
};

// validate when editing tag

const editTag = Joi.object({
  description: Joi.string().required()
})

const validateEditTag = (data) => {
  return editTag.validate(data)
}

module.exports = { Tag, validateCreateTag, validateEditTag };
