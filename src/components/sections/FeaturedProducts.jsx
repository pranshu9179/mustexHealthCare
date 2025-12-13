import AnimatedProductCard from "../AnimatedProductCard";
// import { products } from "../../data/products";
import product from "../../assets/zero.jpg"
import albumex from "../../assets/albumex.jpg"
import callfizz from "../../assets/callfizz1.jpg"
import myotex from "../../assets/myotexplus.jpg"


export default function FeaturedProducts() {
    const products = [
      {
        id: "zerodiab",
        name: "ZeroDiab",
        short: "Anti-Diabetic Syrup — 300ml",
        image: product,
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
        short: "High Quality Protein",
        image: albumex,
        color: "bg-rose-600",
        features: [
          "Complete amino acids",
          "Easily digestible",
          "Sugar free option",
        ],
      },
      {
        id: "callfizzplus",
        name: "Callfizz-Plus",
        short: "Bone Mineralization Tablets",
        image: callfizz,
        color: "bg-emerald-600",
        features: ["Calcium + D3", "Effervescent tablets", "Great for all ages"],
      },
      {
        id: "myotex",
        name: "Myotex-Plus",
        short: "PCOS Support",
        image: myotex,
        color: "bg-pink-500",
        features: [
          "Regulates cycles",
          "Supports fertility",
          "Rich micronutrient profile",
        ],
      },
    ];
    
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Featured Products
        </h3>
        <p className="text-gray-600 mt-3">Best-selling and doctor-trusted formulations.</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 p-4">
        {products.slice(0, 3).map((p) => (
          <AnimatedProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
