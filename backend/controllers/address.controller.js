import Address from "../models/address.model.js";
import User from "../models/user.model.js";


export const getAddresses = async (req, res) => {
  try {
      const userId = req.params.id;

      // Find all addresses for the given user
      const addresses = await Address.find({ user: userId });

      if (!addresses.length) {
          return res.status(404).json({ message: "No addresses found for this user" });
      }

      res.status(200).json({ addresses });
  } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const addAddress = async (req, res) => {
  try {
      const userId = req.params.id; // Get user ID from URL
      const { street, city, state, postalCode, country } = req.body;

      // Check if user exists
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Create a new address document
      const newAddress = new Address({
          user: userId,
          street,
          city,
          state,
          postalCode,
          country
      });

      // Save address to database
      await newAddress.save();

      res.status(201).json({ message: "Address added successfully", address: newAddress });
  } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const { id: userId, addressId } = req.params;
    const { street, city, state, postalCode, country } = req.body;
    
    // Find the address and ensure it belongs to the user
    const address = await Address.findOne({ _id: addressId, user: userId });
    if (!address) {
      return res.status(404).json({ message: "Address not found or does not belong to user" });
    }
    
    // Update the address fields
    address.street = street || address.street;
    address.city = city || address.city;
    address.state = state || address.state;
    address.postalCode = postalCode || address.postalCode;
    address.country = country || address.country;
    
    await address.save();
    
    res.status(200).json({ message: "Address updated successfully", address });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteAddress = async (req, res) => {
  try {
      const { id: userId, addressId } = req.params;

      // Find the address and ensure it belongs to the user
      const address = await Address.findOne({ _id: addressId, user: userId });
      if (!address) {
          return res.status(404).json({ message: "Address not found or does not belong to user" });
      }

      // Delete the address
      await Address.findByIdAndDelete(addressId);

      res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
  }
};