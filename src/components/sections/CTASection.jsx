// // import { Link } from "react-router-dom";

// // export default function CTASection() {
// //   return (
// //     <section className="py-12 bg-gradient-to-br from-purple-600 to-pink-500 text-white text-center">
// //       <h2 className="text-4xl font-bold">Need Help or Guidance?</h2>
// //       <p className="mt-3 text-purple-100 text-lg">
// //         Our healthcare experts are ready to support you.
// //       </p>

// //       <Link
// //         to="/contact"
// //         className="inline-block mt-6 px-8 py-3 bg-white text-purple-700 rounded-lg shadow hover:bg-gray-100 transition"
// //       >
// //         Contact Us
// //       </Link>
// //     </section>
// //   );
// // }




// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function CTASection() {
//   return (
//     <section className="relative py-12 overflow-hidden">
      
//       {/* Background Gradient Blur */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 opacity-95"></div>
//       <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 blur-[120px] rounded-full"></div>
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200/30 blur-[140px] rounded-full"></div>

//       <div className="relative max-w-3xl mx-auto text-center px-6">
        
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight"
//         >
//           Need Help or Guidance?
//         </motion.h2>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-4 text-purple-100 text-lg md:text-xl leading-relaxed"
//         >
//           Our healthcare experts are ready to support you every step of the way.
//         </motion.p>

//         {/* Button */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <Link
//             to="/contact"
//             className="inline-block mt-8 px-8 md:px-10 py-3.5 rounded-xl
//             bg-white text-purple-700 font-semibold text-lg shadow-xl
//             hover:bg-purple-50 hover:shadow-2xl transition-all duration-300
//             hover:-translate-y-1"
//           >
//             Contact Us
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// }



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/zerodiab.jpg"; // <-- use your real product image

export default function CTASection() {
  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-purple-800">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/20 blur-[150px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 items-center px-6 gap-12">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
            Need Help or Guidance?
          </h2>

          <p className="mt-4 text-purple-100 text-md md:text-xl leading-relaxed max-w-md">
            Our healthcare specialists are ready to assist you with expert care
            and personalized recommendations.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-block mt-8 px-10 py-3.5 bg-white text-purple-700 font-semibold 
              rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 
              transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" justify-center md:justify-end md:flex hidden"
        >
          <div className="relative">
            {/* Image Glow */}
            <div className="absolute inset-0 bg-white/20 blur-2xl rounded-3xl"></div>

            <img
              src={heroImg}
              className="relative w-full md:w-96 rounded-2xl shadow-2xl border border-white/20 object-cover"
              alt="Healthcare Assistance"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
