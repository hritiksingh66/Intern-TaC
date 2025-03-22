import Address  from "../models/address.model.js";

const validateAddress = (req, res, next) => {
    const { fullName, address, city, postalCode, country } = req.body;

    if (!fullName || !address || !city || !postalCode || !country) {
        return res.status(400).json({ message: "All shipping address fields are required" });
    }
    
    if (postalCode.length < 5) {
        return res.status(400).json({ message: "Invalid postal code" });
    }

    next(); // Proceed if valid
};

export default validateAddress;
