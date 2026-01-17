const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    completed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true },
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };
