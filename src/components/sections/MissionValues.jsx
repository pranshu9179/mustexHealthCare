// import { motion } from "framer-motion";

// export default function MissionValues() {
//   const items = [
//     { title: "Purity", text: "Only clinically tested herbal extracts." },
//     { title: "Innovation", text: "Advanced formulations with modern research." },
//     { title: "Trust", text: "Recommended by healthcare professionals." },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold text-gray-900">Our Mission & Values</h2>
//         <p className="text-gray-600 mt-2">The foundation of everything we create.</p>
//       </div>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-4">
//         {items.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-700">{item.title}</h3>
//             <p className="mt-3 text-gray-600">{item.text}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical, HeartPulse } from "lucide-react";

export default function MissionValues() {
  const items = [
    {
      title: "Purity",
      text: "Only clinically tested herbal extracts with strict quality standards.",
      icon: <ShieldCheck size={40} className="text-purple-600" />,
    },
    {
      title: "Innovation",
      text: "Advanced formulations powered by modern scientific research.",
      icon: <FlaskConical size={40} className="text-pink-600" />,
    },
    {
      title: "Trust",
      text: "Preferred & recommended by healthcare professionals nationwide.",
      icon: <HeartPulse size={40} className="text-rose-600" />,
    },
  ];

  return (
    <section className="relative py-6 bg-gradient-to-br from-white via-purple-50/40 to-pink-50/40 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/30 blur-[90px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/30 blur-[90px] rounded-full"></div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-14 px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          Our Mission & Values
        </h2>
        <p className="text-gray-600 mt-3 text-md">
          The foundation of everything we create.
        </p>

        {/* Divider */}
        <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="
              bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-lg 
              hover:shadow-2xl border border-white/60 transition
            "
          >
            {/* Icon */}
            <div className="mb-5 flex justify-center">
              <div className="w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>

            {/* Text */}
            <p className="mt-3 text-gray-600 leading-relaxed text-md">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
