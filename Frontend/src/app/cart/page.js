import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";

const Cart = () => {
  // Example cart items (replace with actual data)
  const cartItems = [
    {
      id: 1,
      name: "Brass Ganesha Idol",
      price: 2700,
      quantity: 1,
      image: "/ganesha-idol.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Handcrafted Vase",
      price: 1500,
      quantity: 2,
      image: "/vase.jpg", // Replace with actual image path
    },
  ];

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="bg-gray-100 min-h-screen py-16 text-gray-800">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Shopping Cart</h1>

        {/* Cart Items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button className="p-2 text-gray-700 hover:text-blue-500">
                      <AiOutlineMinus />
                    </button>
                    <span className="mx-2 text-gray-800">{item.quantity}</span>
                    <button className="p-2 text-gray-700 hover:text-blue-500">
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button className="p-2 text-red-500 hover:text-red-700">
                    <AiOutlineDelete />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            )}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-600 mb-4">
              <p>Subtotal</p>
              <p>₹{total}</p>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <p>Shipping</p>
              <p>₹100</p>
            </div>
            <div className="flex justify-between text-gray-800 font-bold text-lg mb-6">
              <p>Total</p>
              <p>₹{total + 100}</p>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
