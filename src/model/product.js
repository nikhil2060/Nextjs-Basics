import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

// Avoid OverwriteModelError
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export { Product };
