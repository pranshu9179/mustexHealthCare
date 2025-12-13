// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import AnimatedProductCard from "../components/AnimatedProductCard";
// import { products } from "../data/products";
// import { motion } from "framer-motion";

// export default function ProductsPage() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />

//       <motion.h2
//         initial={{ opacity: 0, y: 8 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-3xl font-bold max-w-7xl mx-auto pt-10 p-6"
//       >
//         Our Products
//       </motion.h2>

//       <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
//         {products.map((p) => (
//           <AnimatedProductCard key={p.id} product={p} large />
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// }





import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FullProductsSection from "../components/sections/FullProductsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <FullProductsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
