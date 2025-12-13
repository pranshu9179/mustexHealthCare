// import { motion } from "framer-motion";
// import { X } from "lucide-react";

// export default function ProductModal({ product, onClose }) {
//   return (
//     <motion.div
//       className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 150 }}
//         className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
//       >
//         {/* CLOSE BUTTON */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//         >   
//           <X size={22} />
//         </button>

//         {/* IMAGE */}
//         <div className="w-full flex justify-center mb-4">
//           <img
//             src={product.image}
//             className="h-48 object-contain rounded-xl"
//             alt=""
//           />
//         </div>

//         {/* TITLE */}
//         <h2 className="text-2xl font-bold">{product.name}</h2>
//         <p className="text-gray-600">{product.short}</p>

//         {/* FEATURES */}
//         <div className="mt-4">
//           <h3 className="font-semibold mb-2">Key Benefits:</h3>
//           <ul className="space-y-2 text-gray-700">
//             {product.features.map((f, i) => (
//               <li key={i} className="flex gap-2">
//                 <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>
//                 {f}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CLOSE BUTTON BOTTOM */}
//         <button
//           onClick={onClose}
//           className="mt-6 w-full py-3 bg-purple-600 text-white rounded-lg"
//         >
//           Close
//         </button>
//       </motion.div>
//     </motion.div>
//   );
// }



import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProductModal({ product, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* MODAL BOX */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 15 }}
        className="
          bg-white rounded-2xl shadow-2xl w-[90%] max-w-md
          relative p-0 overflow-hidden
        "
      >
        {/* CLOSE BTN */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition"
        >
          <X size={22} />
        </button>

        {/* HEADER */}
        <div className="px-6 py-4 border-b bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-xl font-bold text-gray-900">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600">{product.short}</p>
        </div>

        {/* CONTENT - SCROLLABLE */}
        <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">
          {/* PRODUCT IMAGE */}
          <div className="w-full flex justify-center mb-4">
            <img
              src={product.image}
              className="h-48 object-contain rounded-xl shadow-sm"
              alt=""
            />
          </div>

          {/* BENEFITS */}
          <h3 className="font-semibold mb-2 text-gray-900">Key Benefits:</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            {product.features.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="
              bg-purple-600 hover:bg-purple-700 text-white 
              px-5 py-2 rounded-lg text-sm font-medium shadow
            "
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
