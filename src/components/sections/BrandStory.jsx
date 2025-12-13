// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// // import { IMAGES } from "../../data/products";
// import extras from "../../assets/zero.jpg"
// export default function BrandStory() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-white to-purple-50/40">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-6">
        
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
//           <p className="mt-4 text-gray-700 leading-relaxed">
//             MusTex Healthcare blends ancient herbal science with modern 
//             pharmaceutical precision. Our mission is to create safe, effective,  
//             research-backed products for metabolic, hormonal and lifestyle needs.
//           </p>

//           <Link
//             to="/about"
//             className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
//           >
//             Learn More
//           </Link>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <img
//             src={extras}
//             className="rounded-xl shadow-xl object-cover h-[380px] w-full"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// }



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import extras from "../../assets/zero.jpg";

export default function BrandStory() {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-br from-white via-purple-50/40 to-pink-50/40">

      {/* BACKGROUND SHAPES */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/40 blur-[100px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Subheading */}
          <p className="text-purple-600 font-semibold tracking-wide">
            The MusTex Mission
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Natural Healing<br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Powered by Science
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-lg">
            MusTex Healthcare blends ancient Ayurvedic knowledge with modern 
            pharmaceutical precision. Our formulations are clinically informed, 
            research-driven, and designed to support long-term metabolic and 
            hormonal wellness.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-2">
            <Link
              to="/about"
              className="px-7 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-md hover:shadow-xl transition hover:opacity-90"
            >
              Learn More
            </Link>

            <Link
              to="/products"
              className="px-7 py-3 border border-purple-300 rounded-xl text-purple-700 hover:bg-purple-50 transition shadow-sm"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="relative"
        >
          {/* Soft glow behind the image */}
          <div className="absolute inset-0 bg-purple-400/20 blur-2xl rounded-3xl"></div>

          <img
            src={extras}
            alt="Brand Story"
            className="relative rounded-2xl shadow-2xl w-full h-[380px] object-fit md:object-cover border border-white"
          />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-purple-100"
          >
            <p className="text-sm font-semibold text-purple-700">
              100% Herbal | Clinically Trusted
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
