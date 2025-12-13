// // // import { motion } from "framer-motion";

// // // export default function AnimatedProductCard({ product, large }) {
// // //   return (
// // //     <motion.div
// // //       whileHover={{ scale: 1.03 }}
// // //       className={`bg-white rounded-xl p-4 shadow transition ${large ? "" : ""}`}
// // //     >
// // //       <div className="h-44 flex items-center justify-center">
// // //         <img src={product.image} className="h-full object-contain" />
// // //       </div>

// // //       <div className="mt-4 flex justify-between">
// // //         <div>
// // //           <h4 className="font-semibold">{product.name}</h4>
// // //           <p className="text-sm text-gray-600">{product.short}</p>
// // //         </div>

// // //         <span className={`px-3 py-1 text-xs rounded-full text-white ${product.color}`}>
// // //           {product.id.toUpperCase()}
// // //         </span>
// // //       </div>

// // //       <ul className="mt-3 text-sm text-gray-700 space-y-1">
// // //         {product.features.map((f, i) => (
// // //           <li key={i} className="flex gap-2 items-start">
// // //             <span className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
// // //             {f}
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </motion.div>
// // //   );
// // // }





// // import { motion } from "framer-motion";

// // export default function AnimatedProductCard({ product, large }) {
// //   return (
// //     <motion.div
// //       whileHover={{ y: -6, scale: 1.02 }}
// //       transition={{ type: "spring", stiffness: 180, damping: 12 }}
// //       className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 flex flex-col"
// //     >
// //       {/* IMAGE */}
// //       <div className="h-50 w-full bg-white flex items-center justify-center p-4">
// //         <img
// //           src={product.image}
// //           alt={product.name}
// //           className="object-contain h-full w-full rounded-xl"
// //         />
// //       </div>

// //       {/* CONTENT */}
// //       <div className="flex flex-col grow p-2">
// //         <div className="flex items-start justify-between">
// //           <div>
// //             <h4 className="font-semibold text-lg">{product.name}</h4>
// //             <p className="text-sm text-gray-500">{product.short}</p>
// //           </div>

// //           <span
// //             className={`px-3 py-1 text-xs rounded-full text-white ${product.color}`}
// //           >
// //             {product.id.toUpperCase()}
// //           </span>
// //         </div>

// //         {/* FEATURES (fixed height, evenly spaced, prevents card jump) */}
// //         <ul className="mt-4 space-y-2 text-sm text-gray-700 flex-grow">
// //           {product.features.map((f, i) => (
// //             <li key={i} className="flex items-start gap-2">
// //               <span className="w-2 h-2 mt-1 bg-purple-500 rounded-full"></span>
// //               {f}
// //             </li>
// //           ))}
// //         </ul>

// //         {/* BUTTON / CTA */}
// //         <button className="mt-4 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow hover:shadow-lg transition">
// //           View Details
// //         </button>
// //       </div>
// //     </motion.div>
// //   );
// // }


// import { motion } from "framer-motion";
// import { useState } from "react";
// import ProductModal from "./ProductModal";

// export default function AnimatedProductCard({ product }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Card */}
//       <motion.div
//         whileHover={{ y: -6, scale: 1.02 }}
//         transition={{ type: "spring", stiffness: 180, damping: 12 }}
//         className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 flex flex-col h-[450px]"
//       >
//         {/* IMAGE */}
//         <div className="h-52 w-full bg-white flex items-center justify-center p-4 border-b">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="object-contain h-full w-full rounded-xl"
//           />
//         </div>

//         {/* CONTENT AREA */}
//         <div className="flex flex-col flex-grow p-5">
//           <div className="flex items-start justify-between">
//             <div>
//               <h4 className="font-semibold text-lg leading-tight line-clamp-1">
//                 {product.name}
//               </h4>
//               <p className="text-sm text-gray-500 line-clamp-1">
//                 {product.short}
//               </p>
//             </div>

//             <span
//               className={`px-3 py-1 text-xs rounded-full text-white ${product.color}`}
//             >
//               {product.id.toUpperCase()}
//             </span>
//           </div>

//           {/* FEATURE LIST - FIXED HEIGHT */}
//           <ul className="mt-4 space-y-2 text-sm text-gray-700 overflow-hidden max-h-24">
//             {product.features.map((f, i) => (
//               <li key={i} className="flex items-start gap-2">
//                 <span className="w-2 h-2 mt-1 bg-purple-500 rounded-full"></span>
//                 {f}
//               </li>
//             ))}
//           </ul>

//           {/* BUTTON AT BOTTOM */}
//           <button
//             onClick={() => setOpen(true)}
//             className="mt-6 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow hover:shadow-lg transition"
//           >
//             View Details
//           </button>
//         </div>
//       </motion.div>

//       {/* PRODUCT MODAL */}
//       {open && <ProductModal product={product} onClose={() => setOpen(false)} />}
//     </>
//   );
// }




import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AnimatedProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 flex flex-col h-[450px]"
    >
      {/* IMAGE */}
      <div className="h-52 w-full bg-white flex items-center justify-center p-4 border-b">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-full w-full rounded-xl"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold text-lg leading-tight line-clamp-1">
              {product.name}
            </h4>
            <p className="text-sm text-gray-500 line-clamp-1">
              {product.short}
            </p>
          </div>

          <span
            className={`px-3 py-1 text-xs rounded-full text-white ${product.color}`}
          >
            {product.id.toUpperCase()}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-gray-700 overflow-hidden max-h-24">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-2 h-2 mt-1 bg-purple-500 rounded-full"></span>
              {f}
            </li>
          ))}
        </ul>

        {/* ⭐ VIEW DETAILS BUTTON */}
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="mt-6 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow hover:shadow-lg transition"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
