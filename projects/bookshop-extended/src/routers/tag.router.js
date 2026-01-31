const express = require("express");
const {
  getAllTags,
  createTag,
  deleteTag,
} = require("../controllers/tag.controller");
const tagRouter = express.Router();

tagRouter.get("/", getAllTags);
tagRouter.post("/", createTag);
tagRouter.delete("/:id", deleteTag);

module.exports = { tagRouter };
