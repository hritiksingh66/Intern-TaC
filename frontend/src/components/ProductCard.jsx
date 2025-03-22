import React from "react";
import { useProductStore } from "../stores/useProductStore";

const ProductCard = ({ product }) => {
  const { addToCart } = useProductStore();

  return (
    <div className="border rounded-lg shadow-md p-4 w-64">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="text-xl font-bold mt-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3 hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;