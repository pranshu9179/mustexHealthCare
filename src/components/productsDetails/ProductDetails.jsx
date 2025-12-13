// import { useState, useEffect } from "react";
// import { Mail, Phone, Share2, ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// import img1 from "../../assets/zerodiab.jpg";
// import img2 from "../../assets/zero.jpg";
// // import img3 from "../../assets/albumex.jpg";
// // import img4 from "../../assets/myotex+.jpg";
// // import img5 from "../../assets/gluzenQ.jpg";
// import Footer from "../Footer";
// import Navbar from "../Navbar";

// export default function ProductDetail() {
//   const [isPaused, setIsPaused] = useState(false);

//   const images = [img1, img2];
//   const [index, setIndex] = useState(0);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     if (isPaused) return; // 🚀 pause when hovered

//     const interval = setInterval(() => {
//       nextImage();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isPaused, index]);

//   const prevImage = () =>
//     setIndex((prev) => (prev - 1 + images.length) % images.length);

//   const nextImage = () => setIndex((prev) => (prev + 1) % images.length);

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <div className="grid lg:grid-cols-2 gap-10">
//           {/* ======================================================
//             LEFT: IMAGE SLIDER + THUMBNAILS
//         ====================================================== */}
//           <div className="space-y-6">
//             {/* MAIN SLIDER – GRADIENT BORDER */}
//             <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-purple-600 to-pink-500">
//               {/* Inner white box */}
//               <div className="bg-white rounded-xl p-4 shadow-md">
//                 {/* Share Icon */}
//                 <button className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 z-20">
//                   <Share2 size={18} />
//                 </button>

//                 {/* MAIN IMAGE */}
//                 <div
//                   className="relative h-[360px] md:h-[460px] flex items-center justify-center"
//                   onMouseEnter={() => setIsPaused(true)}
//                   onMouseLeave={() => setIsPaused(false)}
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.img
//                       key={index}
//                       src={images[index]}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.5 }}
//                       className="absolute w-full h-full object-cover rounded-lg"
//                     />
//                   </AnimatePresence>
//                 </div>

//                 {/* LEFT ARROW */}
//                 <button
//                   onClick={prevImage}
//                   className="absolute -left-6 top-1/2 -translate-y-1/2 bg-purple-500 text-white p-2 py-4 rounded-full shadow-lg hover:bg-purple-600 transition z-20"
//                 >
//                   <ChevronLeft size={26} />
//                 </button>

//                 {/* RIGHT ARROW */}
//                 <button
//                   onClick={nextImage}
//                   className="absolute -right-6 top-1/2 -translate-y-1/2 bg-purple-500 text-white p-2  py-4  rounded-full shadow-lg hover:bg-purple-600 transition z-20"
//                 >
//                   <ChevronRight size={26} />
//                 </button>
//               </div>
//             </div>

//             {/* THUMBNAILS */}
//             <div className="grid grid-cols-5 gap-3 ">
//               {images.map((img, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setIndex(i)}
//                   className={`cursor-pointer rounded-lg p-0.5 transition
//         ${
//           i === index
//             ? "bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg"
//             : "bg-gray-200"
//         }
//       `}
//                 >
//                   <img
//                     src={img}
//                     className="w-full h-24 object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ======================================================
//             RIGHT: PRODUCT DETAILS
//         ====================================================== */}
//           <div>
//             <motion.h1
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-3xl font-bold text-gray-900 leading-snug"
//             >
//               Herbal Anti-diabetic Syrup – Infused With Jamun, Neem, Karela |
//               Supports Blood Sugar Control
//             </motion.h1>
//             {/* PRICE + INQUIRY ROW */}
//             <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               {/* PRICE & STOCK */}
//               <div>
//                 <p className="font-semibold text-red-700">Price:</p>

//                 <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700">
//                   Get Latest Price
//                 </button>
//               </div>

//               {/* INQUIRY BUTTON */}
//               <div>
//                 <p className="text-green-600  font-semibold flex items-center gap-2">
//                   ● In Stock
//                 </p>
//                 <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl transition-all w-full sm:w-auto">
//                   SEND INQUIRY
//                 </button>
//               </div>
//             </div>

//             {/* Specifications */}
//             <h2 className="mt-10 text-xl font-semibold text-gray-900">
//               Product Specifications
//             </h2>

//             <table className="w-full mt-4 border text-sm rounded-lg overflow-hidden">
//               <tbody>
//                 {[
//                   ["Product Type", "Herbal syrup"],
//                   ["Ingredients", "Karela, Jamun, Neem"],
//                   ["Packaging", "Bottle"],
//                   ["Quantity", "Varied"],
//                   ["Storage", "Cool, dry place"],
//                   ["Manufacturing Process", "Herbal extraction"],
//                   [
//                     "Features",
//                     "Blood sugar control, Digestion support, Immunity boost",
//                   ],
//                 ].map(([key, val], i) => (
//                   <tr className="border" key={i}>
//                     <td className="p-3 bg-gray-50 font-semibold w-48">{key}</td>
//                     <td className="p-3">{val}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* ======================================================
//           PRODUCT OVERVIEW
//       ====================================================== */}
//         <div className="mt-14">
//           <h2 className="text-2xl font-bold text-gray-800">Product Overview</h2>

//           <p className="mt-4 text-gray-700 leading-relaxed">
//             This Ayurvedic Anti-diabetic Syrup is prepared using natural
//             extracts such as Karela & Jamun. It helps regulate insulin
//             secretion, improve digestion, and maintain healthy blood sugar
//             levels.
//           </p>

//           <h3 className="mt-5 font-semibold text-gray-800">Key Features</h3>
//           <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
//             <li>Helps curb sugar cravings</li>
//             <li>Improves metabolism</li>
//             <li>Boosts digestion and immunity</li>
//           </ul>

//           <h3 className="mt-6 font-semibold text-gray-800">Benefits</h3>
//           <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
//             <li>Useful for diabetic patients</li>
//             <li>Supports heart health</li>
//             <li>Helps with detoxification</li>
//           </ul>

//           <h3 className="mt-6 font-semibold text-gray-800">Disclaimer</h3>
//           <p className="mt-2 text-gray-700">
//             This content is for informational purposes only. Consult your doctor
//             before use.
//           </p>

//           <h3 className="mt-10 text-xl font-bold text-gray-900">
//             Company Details
//           </h3>
//           <div className="mt-4 space-y-2 text-gray-700">
//             <p>
//               <strong>Business Type:</strong> Manufacturer, Supplier
//             </p>
//             <p>
//               <strong>Established:</strong> 2007
//             </p>
//             <p>
//               <strong>GST No:</strong> 04AADCH1130J1Z4
//             </p>
//             <p>
//               <strong>Employees:</strong> 15
//             </p>
//             <p>
//               <strong>Working Days:</strong> Monday–Sunday
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { productData } from "../../data/productData";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  if (!product) {
    return <h1 className="text-center py-20 text-3xl">Product Not Found</h1>;
  }

  // Autoplay slider
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, product.images.length]);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ========================= LEFT SLIDER ========================== */}
          <div className="space-y-6">
            <div className="relative p-[4px] rounded-xl bg-gradient-to-r from-purple-600 to-pink-500">
              <div className="bg-white rounded-xl p-4 shadow-lg relative">

                {/* Share Button */}
                <button className="absolute top-4 right-4 z-20 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200">
                  <Share2 size={18} />
                </button>

                {/* Main Image */}
                <div
                  className="relative h-[360px] md:h-[460px] flex items-center justify-center"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={index}
                      src={product.images[index]}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-full h-full object-contain rounded-lg"
                    />
                  </AnimatePresence>
                </div>

                {/* Left Arrow */}
                <button
                  onClick={() =>
                    setIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
                  }
                  className="absolute -left-6 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 z-30"
                >
                  <ChevronLeft size={26} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() =>
                    setIndex((prev) => (prev + 1) % product.images.length)
                  }
                  className="absolute -right-6 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 z-30"
                >
                  <ChevronRight size={26} />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`cursor-pointer p-1 rounded-lg transition ${
                    i === index
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 shadow"
                      : "bg-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ========================= RIGHT DETAILS ========================== */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900"
            >
              {product.title}
            </motion.h1>

            {/* Price + actions */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-semibold text-red-700">Price:</p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm shadow hover:bg-purple-700">
                  Get Latest Price
                </button>
              </div>

              <div>
                <p className="text-green-600 font-semibold flex items-center gap-2">
                  ● In Stock
                </p>

                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl transition-all w-full sm:w-auto">
                  SEND INQUIRY
                </button>
              </div>
            </div>

            {/* Specifications Table */}
            <h2 className="mt-10 text-xl font-semibold text-gray-900">
              Product Specifications
            </h2>

            <div className="rounded-xl overflow-hidden border shadow-sm mt-4">
              <table className="w-full text-sm">
                <tbody>
                  {product.specifications.map(([key, val], i) => (
                    <tr key={i} className="border-b">
                      <td className="p-3 bg-gray-50 font-semibold w-48">{key}</td>
                      <td className="p-3">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ========================= PRODUCT OVERVIEW ========================== */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-800">Product Overview</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">{product.overview}</p>

          {/* Key Features */}
          <h3 className="mt-6 font-semibold text-gray-800">Key Features</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          {/* Benefits */}
          <h3 className="mt-6 font-semibold text-gray-800">Benefits</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            {product.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

        </div>
      </div>

      <Footer />
    </>
  );
}
