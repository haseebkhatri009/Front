// // components/Header.js

// import Link from "next/link";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="p-4 border-b">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl font-bold">
//           <Image src="/logo.png" width={200} height={40} />
//         </div>

//         {/* Navigation Links */}
//         <nav>
//           <ul className="flex space-x-6">
//             <li>
//               <Link href="/" className="hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:underline">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:underline">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;




// components/Header.js

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="p-4 border-b bg-white shadow-md relative z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl font-bold">
//           <Link href="/">
//             <Image src="/logo.png" width={200} height={40} alt="Logo" />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:block">
//           <ul className="flex space-x-6">
//             <li>
//               <Link href="/" className="hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:underline">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:underline">
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/login"
//                 className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//               >
//                 Login
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           className="md:hidden text-gray-800 focus:outline-none"
//           onClick={toggleMobileMenu}
//         >
//           {isMobileMenuOpen ? (
//             <X size={24} className="transition-transform transform rotate-90 duration-300" />
//           ) : (
//             <Menu size={24} className="transition-transform transform rotate-0 duration-300" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`absolute top-full left-0 w-full bg-white border-t shadow-md overflow-hidden transition-all duration-300 ${
//           isMobileMenuOpen ? 'max-h-96 mt-2' : 'max-h-0 mt-0'
//         }`}
//       >
//         <ul className="flex flex-col items-center space-y-4 py-4">
//           <li>
//             <Link href="/" className="hover:underline" onClick={toggleMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="hover:underline" onClick={toggleMobileMenu}>
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:underline" onClick={toggleMobileMenu}>
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/login"
//               className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//               onClick={toggleMobileMenu}
//             >
//               Login
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;





'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in (e.g., token in localStorage)
    const token = localStorage.getItem('userToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    // Clear token or any user data from localStorage
    localStorage.removeItem('userToken');
    setIsAuthenticated(false);
    alert('Logged out successfully!');
  };

  return (
    <header className="p-4 border-b bg-white shadow-md relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src="/logo.png" width={200} height={40} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  href="/login"
                  className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="transition-transform transform rotate-90 duration-300" />
          ) : (
            <Menu size={24} className="transition-transform transform rotate-0 duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t shadow-md overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 mt-2' : 'max-h-0 mt-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link href="/" className="hover:underline" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline" onClick={toggleMobileMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline" onClick={toggleMobileMenu}>
              Contact Us
            </Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
                className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;

