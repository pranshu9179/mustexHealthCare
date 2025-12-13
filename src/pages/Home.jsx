// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import AnimatedProductCard from "../components/AnimatedProductCard";
// import { IMAGES, products } from "../data/products";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight, Info } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 400], [0, -60]);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />

//       <motion.section style={{ y }} className="relative pt-10">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 p-6">
          
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold text-purple-700">
//               Prevent & Cure Diabetes <br />
//               <span className="text-gray-900">with Zero Complications</span>
//             </h2>

//             <p className="text-gray-600">
//               Herbal, safe and clinically informed formulations for today’s lifestyle.
//             </p>

//             <div className="flex gap-3">
//               <Link to="/products" className="bg-purple-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">
//                 Explore Products <ArrowRight size={16} />
//               </Link>
//               <button className="border px-5 py-3 rounded-lg flex items-center gap-2">
//                 <Info size={16} /> Ingredients
//               </button>
//             </div>
//           </div>

//           <div className="relative">
//             <img
//               src={IMAGES.hero}
//               className="rounded-xl shadow-2xl object-cover h-96 w-full"
//             />
//           </div>

//         </div>

//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 p-6 mt-10">
//           {products.slice(0, 3).map((p) => (
//             <AnimatedProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       <Footer />
//     </div>
//   );
// }





// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import AnimatedProductCard from "../components/AnimatedProductCard";
// import Features from "../components/Features";
// import Statistic from "../components/Statistic";
// import { IMAGES, products } from "../data/products";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight, Info } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 300], [0, -50]);

//   return (
//     <div className="bg-gray-50 min-h-screen overflow-hidden">
//       <Navbar />

//       {/* ================= HERO ================= */}
//       <motion.section style={{ y }} className="relative pt-20 pb-16">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-6">
          
//           {/* TEXT */}
//           <div className="space-y-6">
//             <h2 className="text-5xl font-extrabold leading-tight">
//               <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
//                 Prevent & Cure Diabetes
//               </span>
//               <br />
//               <span className="text-gray-900">
//                 with Zero Complications
//               </span>
//             </h2>

//             <p className="text-gray-600 text-lg leading-relaxed">
//               Herbal, safe and clinically formulated medicines designed for 
//               long-term wellness, metabolic balance, and modern lifestyle needs.
//             </p>

//             <div className="flex gap-4">
//               <Link
//                 to="/products"
//                 className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
//               >
//                 Explore Products <ArrowRight size={18} />
//               </Link>
//               <button className="border px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm hover:bg-gray-100">
//                 <Info size={18} /> Ingredients
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="mt-10 grid grid-cols-3 gap-4 w-full max-w-sm">
//               <Statistic label="Years" value="10+" />
//               <Statistic label="Products" value="15+" />
//               <Statistic label="Customers" value="1M+" />
//             </div>
//           </div>

//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="shadow-2xl rounded-xl overflow-hidden">
//               <img
//                 src={IMAGES.hero}
//                 className="rounded-xl object-cover h-[420px] w-full"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* ================= PRODUCTS PREVIEW ================= */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto text-center mb-12">
//           <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
//             Featured Products
//           </h3>
//           <p className="text-gray-600 mt-2">
//             Our most trusted and clinically-formulated supplements.
//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
//           {products.slice(0, 3).map((p) => (
//             <AnimatedProductCard key={p.id} product={p} />
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             to="/products"
//             className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 shadow"
//           >
//             View All Products
//           </Link>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-20 bg-gray-50">
//         <Features />
//       </section>

//       {/* ================= BRAND STORY / ABOUT PREVIEW ================= */}
//       <section className="py-20 bg-gradient-to-br from-white to-purple-50/30">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 p-6">
          
//           <div>
//             <h3 className="text-4xl font-bold text-gray-900">Our Story</h3>
//             <p className="text-gray-700 mt-4 leading-relaxed">
//               MusTex Healthcare blends ancient herbal science with modern 
//               pharmaceutical precision. Our mission is to create safe, effective, 
//               research-backed products that support diabetes management, hormonal 
//               balance, bone health, and overall wellness.
//             </p>

//             <Link
//               to="/about"
//               className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow"
//             >
//               Learn More
//             </Link>
//           </div>

//           <div className="rounded-lg overflow-hidden shadow-xl">
//             <img
//               src={IMAGES.extras}
//               className="object-cover w-full h-96"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= TESTIMONIALS ================= */}
//       <section className="py-24 bg-white">
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <h3 className="text-4xl font-bold text-gray-900">
//             Trusted by Thousands
//           </h3>
//           <p className="text-gray-600 mt-2">
//             Real people. Real results.
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
//           {[1, 2, 3].map((i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-gray-50 p-6 rounded-xl shadow"
//             >
//               <p className="text-gray-700 italic mb-4">
//                 “The supplements helped me maintain healthy blood sugar and energy levels!”
//               </p>
//               <h4 className="font-bold text-gray-900">Patient {i}</h4>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CONTACT PREVIEW ================= */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
//         <div className="max-w-6xl mx-auto text-center p-6">
//           <h3 className="text-4xl font-bold">Have Questions?</h3>
//           <p className="mt-3 text-purple-100 text-lg">
//             Our healthcare team is ready to guide you.
//           </p>

//           <Link
//             to="/contact"
//             className="inline-block mt-6 px-8 py-3 bg-white text-purple-700 rounded-lg shadow hover:bg-gray-100"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../components/sections/Hero";
import StatsSection from "../components/sections/StatsSection";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import BrandStory from "../components/sections/BrandStory";
import MissionValues from "../components/sections/MissionValues";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturedProducts />
      <BrandStory />
      <MissionValues />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
