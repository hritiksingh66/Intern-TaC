import express from "express";
import validateAddress from "../middleware/address.middleware.js"; //
import { addAddress, getAddresses, updateAddress, deleteAddress } from "../controllers/address.controller.js"; 

const router = express.Router();

router.get("/auth/:id/addresses", getAddresses);
router.post("/:id/addresses", validateAddress, addAddress); 
router.put("/auth/:id/addresses/:addressId", validateAddress, updateAddress); 
router.delete("/auth/:id/addresses/:addressId", deleteAddress); 

export default router;