"use client";

import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Brass Large Deep Lakshmi Pavaai Vilakku Statue",
    originalPrice: "₹47,250.00",
    discountedPrice: "₹38,250.00",
    images: [
      "https://budhshiv.com/cdn/shop/files/IMG-3381_1260x.jpg?v=1733400091",
      "https://budhshiv.com/cdn/shop/files/IMG-3382_1260x.jpg?v=1733400092",
      "https://budhshiv.com/cdn/shop/files/IMG-3383_1260x.jpg?v=1733400093"
    ],
    imageAlt: "Brass Large Deep Lakshmi Pavaai Vilakku Statue",
    description: "A stunning handcrafted brass Lakshmi Pavaai Vilakku statue for home décor and religious rituals.",
    shippingDetails: "Free shipping across India. Estimated delivery in 5-7 business days.",
    dimensions: "Height: 12 inches, Width: 8 inches, Depth: 6 inches",
  },
  {
    id: 2,
    name: "Brass Fine Quality Krishna Statue",
    originalPrice: "₹16,500.00",
    discountedPrice: "₹14,850.00",
    images: [
      "https://budhshiv.com/cdn/shop/files/IMG-2841.jpg?v=1731504872",
      "https://budhshiv.com/cdn/shop/files/IMG-2842.jpg?v=1731504873",
      "https://budhshiv.com/cdn/shop/files/IMG-2843.jpg?v=1731504874"
    ],
    imageAlt: "Brass Fine Quality Krishna Statue",
    description: "Elegant brass Krishna statue with intricate details, perfect for pooja rooms and gifting.",
    shippingDetails: "Free shipping across India. Estimated delivery in 5-7 business days.",
    dimensions: "Height: 10 inches, Width: 6 inches, Depth: 5 inches",
  },
  // Add other products here...
];

export default function ProductDetail({ params }) {
  const { id } = React.use(params);  // Correct way to access `params.id`

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  // State for managing image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State for managing quantity
  const [quantity, setQuantity] = useState(1);  // Initialize quantity to 1

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [product.images.length]);

  // Functions to navigate the images manually
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  // Handle quantity change
  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) => {
      if (action === "increase") {
        return prevQuantity + 1;
      } else if (action === "decrease" && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <main className="bg-white py-10 text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Product Image Carousel with Arrows */}
          <div className="w-full md:w-1/2 relative">
            {/* Left Arrow */}
            <button
              onClick={goToPrevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full shadow-lg z-10"
            >
              &#8592;
            </button>

            <img
              src={product.images[currentImageIndex]}
              alt={product.imageAlt}
              className="w-full rounded-lg border border-gray-200 shadow-sm h-[550px] transition-all duration-500 ease-in-out"
            />

            {/* Right Arrow */}
            <button
              onClick={goToNextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full shadow-lg z-10"
            >
              &#8594;
            </button>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Price Section */}
            <div className="mb-6">
              <p className="text-lg text-gray-500 line-through">{product.originalPrice}</p>
              <p className="text-2xl font-bold text-red-600">{product.discountedPrice}</p>
              <p className="text-sm text-gray-500">Taxes included and Free Shipping in India</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button
                  className="w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-700 border-r border-gray-300"
                  onClick={() => handleQuantityChange("decrease")}
                >
                  –
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  className="w-full text-center text-gray-700 focus:outline-none"
                  readOnly
                />
                <button
                  className="w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-700 border-l border-gray-300"
                  onClick={() => handleQuantityChange("increase")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mb-6">
              <button className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-100 transition">
                Add to Cart
              </button>
              <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">
                <Link href="/checkout">
                  Buy it Now
                </Link>
              </button>
            </div>

            {/* Shipping Details */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Shipping Details</h3>
              <p className="text-gray-700">{product.shippingDetails}</p>
            </div>

            {/* Dimensions */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Dimensions</h3>
              <p className="text-gray-700">{product.dimensions}</p>
            </div>
          </div>
        </div>

        {/* "You May Also Like" Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id) // Exclude current product
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={relatedProduct.images[0]} // Show first image
                    alt={relatedProduct.imageAlt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
                    <p className="text-gray-700 text-sm mb-2">{relatedProduct.description}</p>
                    <p className="text-xl font-bold text-red-600">{relatedProduct.discountedPrice}</p>
                    <button className="mt-4 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
