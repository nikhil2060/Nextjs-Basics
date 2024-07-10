import { Product } from "@/model/product";
import connectDB from "@/utils/database";

const newMaker = async (req, res) => {
  if (req.method !== "POST") {
    res.status(404).json({
      success: false,
      message: "Invalid Request",
    });
  } else {
    try {
      await connectDB();

      const { name, price, category } = req.body();

      const product = await Product.create({
        name,
        price,
        category,
      });

      res.status(201).json({
        success: true,
        product,
        message: "Product successfully registered",
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server Error", error });
    }
  }
};

export default newMaker;
