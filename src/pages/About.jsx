// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="max-w-5xl mx-auto p-6"
//       >
//         <h2 className="text-3xl font-bold mb-4">About MusTex Healthcare</h2>
//         <p className="text-gray-700 leading-relaxed">
//           We combine herbal knowledge with modern quality standards to create  
//           safe, effective medicinal formulations for metabolic, hormonal and lifestyle needs.
//         </p>
//       </motion.div>

//       <Footer />
//     </div>
//   );
// }




import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import BrandStory from "../components/sections/BrandStory";
import MissionValues from "../components/sections/MissionValues";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

export default function About() {
  return (
    <>
      <Navbar />
      <BrandStory />
      <MissionValues />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
