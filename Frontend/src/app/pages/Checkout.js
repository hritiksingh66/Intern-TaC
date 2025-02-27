import { FiFacebook } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export default function Checkout() {
  return (
    <main className="bg-gray-100 py-10 text-gray-800">
      {/* Header Section */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-6">
          <img
            src="/path-to-your-logo.png"
            alt="BudhShiv Logo"
            className="h-16 mb-4 md:mb-0"
          />
          <div className="space-y-2 text-center md:text-right text-gray-600">
            <p className="text-sm flex items-center justify-center md:justify-end">
              <BsWhatsapp className="h-5 w-5 mr-2 text-green-500" />
              +91-8826480550
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://facebook.com/budhshiv"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Facebook"
              >
                <FiFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/budhshiv"
                className="text-gray-600 hover:text-pink-500"
                aria-label="Instagram"
              >
                <AiFillInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="container mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact and Delivery */}
        <div>
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Contact Section */}
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="mr-2 focus:ring-indigo-500"
                />
                <label htmlFor="subscribe" className="text-sm">
                  Email me with news and offers
                </label>
              </div>
            </div>

            {/* Delivery Section */}
            <h2 className="text-2xl font-semibold mb-6">Delivery Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Address</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your address"
                  rows="3"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 mb-2">City</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">State</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your state"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Pincode</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your pincode"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary & Payment */}
        <div>
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Order Summary */}
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <img
                  src="/path-to-product-image.png"
                  alt="Product"
                  className="h-16 w-16 rounded"
                />
                <p className="text-sm">Brass Ganesha Idol Seated on Lotus</p>
                <p className="font-semibold">₹2,700.00</p>
              </div>
            </div>

            {/* Payment Mode */}
            <h2 className="text-2xl font-semibold mt-8 mb-6">Payment Mode</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  id="creditCard"
                  className="mr-3 focus:ring-indigo-500"
                />
                <label htmlFor="creditCard" className="text-sm">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  id="upi"
                  className="mr-3 focus:ring-indigo-500"
                />
                <label htmlFor="upi" className="text-sm">
                  UPI (Google Pay, PhonePe, etc.)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  id="cod"
                  className="mr-3 focus:ring-indigo-500"
                />
                <label htmlFor="cod" className="text-sm">
                  Cash on Delivery (COD)
                </label>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-500 transition mt-6">
              Pay Now
            </button>
          </div>

          {/* Policies */}
          <div className="mt-8 text-sm text-gray-500 space-y-3">
            <p>
              <a href="/refund-policy" className="hover:text-indigo-600">
                Refund Policy
              </a>
            </p>
            <p>
              <a href="/shipping-policy" className="hover:text-indigo-600">
                Shipping Policy
              </a>
            </p>
            <p>
              <a href="/privacy-policy" className="hover:text-indigo-600">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
