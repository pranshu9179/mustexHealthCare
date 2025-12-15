// import { NavLink, Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 bg-white/80 backdrop-blur shadow-sm z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold rounded-lg">
//             RX
//           </div>
//           <div>
//             <h1 className="font-bold text-lg">MusTex Healthcare</h1>
//             <p className="text-xs text-gray-500">Must be feel the heal</p>
//           </div>
//         </div>

//         <nav className="flex gap-6 text-sm">
//           <NavLink to="/" className={({isActive}) => isActive ? "text-purple-600 font-semibold" : "text-gray-700"}>
//             Home
//           </NavLink>
//           <NavLink to="/products" className={({isActive}) => isActive ? "text-purple-600 font-semibold" : "text-gray-700"}>
//             Products
//           </NavLink>
//           <NavLink to="/about" className={({isActive}) => isActive ? "text-purple-600 font-semibold" : "text-gray-700"}>
//             About
//           </NavLink>
//           <NavLink to="/contact" className={({isActive}) => isActive ? "text-purple-600 font-semibold" : "text-gray-700"}>
//             Contact
//           </NavLink>
//         </nav>

//         <Link to="/products" className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-lg">
//           Buy Now
//         </Link>
//       </div>
//     </header>
//   );
// }





import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // <--- your logo here

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="MusTex Logo"
            className="w-10 h-10 object-cover rounded-md shadow-sm"
          />
          <div>
            <h1 className="font-extrabold text-lg tracking-tight text-gray-800">
              MusTex Healthcare
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Where Quality is a Must</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                    : "text-gray-700 hover:text-purple-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* <Link
            to="/products"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            Buy Now
          </Link> */}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="flex flex-col p-4 space-y-4">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 px-2 rounded-lg transition ${
                      isActive
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-800 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-3 rounded-lg shadow hover:opacity-90 transition"
              >
                Buy Now
              </Link> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
