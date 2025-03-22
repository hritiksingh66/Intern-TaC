import express from "express";
import { 
    getAllProducts,
    getFeaturedProducts,
    getRecommendedProducts,
    getProductByCategory,
    createProduct,
    toggleFeaturedProduct,
    deleteProduct,
} from "../controllers/product.controller.js";

import { protectRoute, sellerRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// ✅ Public Routes
router.get("/", getAllProducts); 
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductByCategory);
router.get("/recommendations", getRecommendedProducts); 

// ✅ Seller/Admin Routes (Protected)
router.post("/", protectRoute, sellerRoute, createProduct);
router.patch("/:id", protectRoute, sellerRoute, toggleFeaturedProduct);
router.delete("/:id", protectRoute, sellerRoute, deleteProduct);

export default router;