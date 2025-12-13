// export default function Footer() {
//   return (
//     <footer className="text-center text-gray-600 py-6">
//       © {new Date().getFullYear()} MusTex Healthcare — All rights reserved.
//     </footer>
//   );
// }

import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png"; // update if needed

export default function Footer() {
  return (
    <footer className=" bg-white pt-6 pb-6 border-t-2 border-gray-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="MusTex Healthcare"
            className="w-24 h-20 object-cover mb-3 rounded"
          />
          <h3 className="text-xl font-bold text-gray-900">MusTex Healthcare</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Herbal, scientific and wellness-focused healthcare solutions for
            modern lifestyles.
          </p>
        </div>

        {/* CONTACT */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Contact Info</h4>

          <div className="flex justify-center md:justify-start gap-3 items-start">
            <MapPin size={20} className="text-purple-600 mt-1" />
            <p className="text-gray-700 leading-relaxed">
              KHASRA No. 9G-2, KHAJURI-KHURD,<br />
              New Bypass Square, Raisen Road,<br />
              Bhopal — 462022
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-3 items-center mt-3">
            <Phone size={20} className="text-purple-600" />
            <p className="text-gray-700">+91 9753552090</p>
          </div>

          <div className="flex justify-center md:justify-start gap-3 items-center mt-2">
            <Mail size={20} className="text-purple-600" />
            <p className="text-gray-700">mustexhealthcare@gmail.com</p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="text-center md:text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h4>

          <ul className="space-y-2 text-gray-700">
            <li><a href="/" className="hover:text-purple-600 transition">Home</a></li>
            <li><a href="/products" className="hover:text-purple-600 transition">Products</a></li>
            <li><a href="/about" className="hover:text-purple-600 transition">About</a></li>
            <li><a href="/contact" className="hover:text-purple-600 transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="mt-10 pt-4 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} MusTex Healthcare — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
