// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight, Info } from "lucide-react";
// // import { IMAGES } from "../../data/products";
// import Statistic from "../Statistic";
// import hero from "../../assets/zero.jpg"

// export default function Hero() {
//   return (
//     <section className="pt-24 pb-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 p-6">
        
//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6"
//         >
//           <h1 className="text-5xl font-extrabold leading-tight">
//             <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
//               Prevent & Cure Diabetes
//             </span>
//             <br />
//             <span className="text-gray-900">with Zero Complications</span>
//           </h1>

//           <p className="text-gray-600 text-lg">
//             Herbal, safe and clinically formulated medicines designed for 
//             long-term wellness and metabolic balance.
//           </p>

//           <div className="flex gap-4">
//             <Link
//               to="/products"
//               className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
//             >
//               Explore Products <ArrowRight size={18} />
//             </Link>

//             <button className="border px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100">
//               <Info size={18} /> Ingredients
//             </button>
//           </div>

//           {/* <div className="grid grid-cols-3 gap-4 mt-10 max-w-sm">
//             <Statistic label="Years" value="10+" />
//             <Statistic label="Products" value="15+" />
//             <Statistic label="Customers" value="1M+" />
//           </div> */}
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.92 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           className="rounded-xl overflow-hidden shadow-2xl"
//         >
//           <img
//             src={hero}
//             className="object-cover w-full h-[420px]"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// }





import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";
import Statistic from "../Statistic";
import heroImage from "../../assets/zero.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-6 bg-gradient-to-br from-purple-50 via-white to-pink-50">

      {/* Floating Gradient Blobs (background decorations) */}
      <div className="absolute top-10 -left-10 w-48 h-48 bg-purple-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300/30 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 p-6">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Prevent & Cure Diabetes
            </span>
            <br />
            <span className="text-gray-900">with Zero Complications</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg"
          >
            Our clinically informed herbal medicines are crafted for long-term 
            metabolic balance, sustainability and overall health improvement.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 flex-wrap"
          >
            <Link
              to="/products"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition duration-200"
            >
              Explore Products <ArrowRight size={18} />
            </Link>

            <button className="border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
              <Info size={18} /> Ingredients
            </button>
          </motion.div>

          {/* Stats Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 mt-6 max-w-sm"
          >
            <Statistic label="Years" value="10+" />
            <Statistic label="Products" value="15+" />
            <Statistic label="Customers" value="1M+" />
          </motion.div> */}
        </motion.div>

        {/* RIGHT SIDE IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Floating shine effect */}
          <motion.div
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 rounded-2xl"
          />

          {/* Main Hero Image */}
          <img
            src={heroImage}
            className="rounded-2xl shadow-2xl border border-purple-100 object-fit w-full max-h-[440px]"
            alt="Hero Product"
          />
        </motion.div>

      </div>
    </section>
  );
}
