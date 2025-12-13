// import { motion } from "framer-motion";

// export default function TestimonialsSection() {
//   const reviews = [
//     "ZeroDiab has helped me stabilize my sugar levels naturally.",
//     "Albumex boosted my energy and recovery!",
//     "Callfizz-Plus improved my bone strength noticeably.",
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-4xl mx-auto text-center mb-16">
//         <h3 className="text-4xl font-bold text-gray-900">Trusted by Thousands</h3>
//         <p className="text-gray-600 mt-2">Real patients. Real improvements.</p>
//       </div>

//       <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 p-6">
//         {reviews.map((r, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-gray-50 p-6 rounded-lg shadow"
//           >
//             <p className="text-gray-700 italic">“{r}”</p>
//             <h4 className="mt-4 font-bold text-gray-900">Patient {i + 1}</h4>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Star, CircleUser } from "lucide-react";


export default function TestimonialsSection() {
const reviews = [
  {
    text: "ZeroDiab has helped me stabilize my sugar levels naturally. No side effects and noticeable results!",
    name: "Amit Sharma",
  },
  {
    text: "Albumex boosted my recovery and energy. One of the best supplements I’ve tried!",
    name: "Priya Patel",
  },
  {
    text: "Callfizz-Plus improved my bone strength significantly. Truly effective for daily wellness.",
    name: "Rahul Verma",
  },
];


  return (
    <section className="relative py-6 bg-gradient-to-br from-white via-purple-50/40 to-pink-50/40 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-10 left-0 w-72 h-72 bg-purple-300/30 blur-[90px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/30 blur-[100px] rounded-full"></div>

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center mb-8 px-6">
        <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          Trusted by Thousands
        </h3>
        <p className="text-gray-600 mt-3 text-md">
          Real stories from real patients who experienced positive change.
        </p>

        <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
      </div>

      {/* Testimonials Grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/60 hover:shadow-2xl transition"
          >
            {/* Avatar */}
{/* Avatar Icon */}
<div className="flex justify-center">
  <div className="w-16 h-16 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center shadow-sm">
    <CircleUser size={34} className="text-gray-800" />
  </div>
</div>


            {/* Stars */}
            <div className="flex justify-center mt-4 text-yellow-500">
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <Star
                  key={idx}
                  size={20}
                  fill="gold"
                  stroke="gold"
                  className="mx-[2px]"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="mt-4 text-gray-700 italic leading-relaxed">
              “{review.text}”
            </p>

            {/* Name */}
            <h4 className="mt-5 font-semibold text-gray-900">{review.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
