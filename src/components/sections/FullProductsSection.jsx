import { motion } from "framer-motion";
import AnimatedProductCard from "../AnimatedProductCard";

// IMPORT ALL REAL PRODUCT IMAGES
import imgZero from "../../assets/zerodiab.jpg";
import imgAlbumex from "../../assets/albumex.jpg";
import imgCallfizz from "../../assets/callfizz.jpg";
import imgCallfizz2 from "../../assets/callfizz1.jpg";
import imgCallfizz3 from "../../assets/callfizz2.jpg";
import imgCallfizz4 from "../../assets/callfizz3.jpg";
import imgGluzen from "../../assets/gluzenQ.jpg";
import imgMyotex from "../../assets/myotex+.jpg";
import imgMyotexPlus from "../../assets/myotexplus.jpg";
import imgNutrient from "../../assets/nutrient.jpg";

export default function FullProductsSection() {
  const products = [
    {
      id: "zerodiab",
      name: "ZeroDiab",
      short: "Anti-Diabetic Syrup — 300ml",
      image: imgZero,
      color: "bg-purple-600",
      features: [
        "Herbal blend",
        "Zero complications approach",
        "Clinically informed",
      ],
    },
    {
      id: "albumex",
      name: "Albumex",
      short: "High Quality Protein Powder",
      image: imgAlbumex,
      color: "bg-rose-600",
      features: ["Complete amino acids", "Easy to digest", "Sugar-free option"],
    },
    {
      id: "callfizzplus",
      name: "Callfizz-Plus",
      short: "Bone Mineralization Tablets",
      image: imgCallfizz,
      color: "bg-emerald-600",
      features: ["Calcium + D3", "Effervescent tablets", "Ideal for adults"],
    },
    // {
    //   id: "callfizz2",
    //   name: "Callfizz-Plus Orange",
    //   short: "Effervescent Wellness Drink",
    //   image: imgCallfizz2,
    //   color: "bg-orange-600",
    //   features: ["Strong bones", "Rich taste", "Orange vitamin load"],
    // },
    // {
    //   id: "callfizz3",
    //   name: "Callfizz-Plus Pro",
    //   short: "Advanced Mineral Supplement",
    //   image: imgCallfizz3,
    //   color: "bg-blue-600",
    //   features: ["Fast absorption", "Extra strength", "Daily health"],
    // },
    {
      id: "gluzenq",
      name: "Gluzen-Q",
      short: "Gut + Wellness Formula",
      image: imgGluzen,
      color: "bg-yellow-600",
      features: ["Digestion support", "Energy booster", "Q-enzyme blend"],
    },
    {
      id: "myotexplus",
      name: "Myotex-Plus",
      short: "PCOS Support Formula",
      image: imgMyotex,
      color: "bg-pink-600",
      features: ["Regulates cycles", "Supports fertility", "Clinically tested"],
    },
    // {
    //   id: "myotexplus",
    //   name: "Myotex+ Advance",
    //   short: "Hormonal Support Supplement",
    //   image: imgMyotexPlus,
    //   color: "bg-fuchsia-600",
    //   features: ["Improves metabolism", "Hormonal balance", "Women's health"],
    // },
    // {
    //   id: "nutrient",
    //   name: "Nutrient Care",
    //   short: "Daily Immunity Boost",
    //   image: imgNutrient,
    //   color: "bg-indigo-600",
    //   features: ["Vitamin-rich", "Daily support", "Natural extracts"],
    // },
  ];

  return (
    <section className="py-8 relative bg-gradient-to-br from-white via-purple-50/50 to-pink-50/40">
      {/* Soft Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200/40 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-8">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-extrabold text-gray-900"
        >
          Our Premium Product Line
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-700 mt-3 text-md"
        >
          Scientifically formulated. Herbal-based. Clinically trusted.
        </motion.p>

        {/* Divider */}
        <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
      </div>

      {/* Product Grid */}
      <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <AnimatedProductCard product={p} large />
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      {/* <div className="text-center mt-4">
        <motion.a
          href="/products"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-xl hover:shadow-2xl transition"
        >
          View All Products →
        </motion.a>
      </div> */}
    </section>
  );
}
