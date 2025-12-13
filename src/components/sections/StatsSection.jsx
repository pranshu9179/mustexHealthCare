// import Statistic from "../Statistic";

// export default function StatsSection() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 text-center">
//         <Statistic value="10+" label="Years Experience" />
//         <Statistic value="15+" label="Products Available" />
//         <Statistic value="1M+" label="Happy Customers" />
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import Statistic from "../Statistic";

export default function StatsSection() {
  return (
    <section className="py-8 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300/40 blur-[90px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-6"
      >
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Trusted By Thousands
          </span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

          {/* 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Statistic value="10+" label="Years Experience" />
          </motion.div>

          {/* 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
          >
            <Statistic value="15+" label="Products Available" />
          </motion.div>

          {/* 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Statistic value="1M+" label="Happy Customers" />
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
