import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold tracking-wide">
          Budhshiv
        </Link>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link href="#about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
            {/* Cart Icon */}
            <li>
              <Link href="/cart" className="hover:text-blue-500 transition">
                <AiOutlineShoppingCart className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
