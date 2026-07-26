import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 40 },
    text: { type: String, required: true, trim: true, maxlength: 240 },
    color: {
      type: String,
      enum: ["pink", "lavender", "mint", "yellow"],
      default: "pink",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
