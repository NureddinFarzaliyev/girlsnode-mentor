const { validateCreateTag, Tag } = require("../models/tag.model");

const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    return res.status(200).send({ data: tags });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error" });
  }
};

const createTag = async (req, res) => {
  const { error } = validateCreateTag(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }

  try {
    const newTag = await Tag.create(req.body);
    return res.status(201).send({ message: "Tag created", data: newTag });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error" });
  }
};

const deleteTag = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTag = await Tag.findByIdAndDelete(id);
    if (!deletedTag) {
      return res.status(404).send({ error: "Tag not found" });
    }
    return res.status(200).send({ message: "Tag deleted" });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { createTag, deleteTag, getAllTags };
