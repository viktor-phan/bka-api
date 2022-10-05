import mongoose from "mongoose";
export const ProductSchema = new mongoose.Schema(
  {
    englishName: { type: String, required: true },
    vietName: { type: String },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);
const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
