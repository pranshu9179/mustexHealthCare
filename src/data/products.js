import hero from "../assets/zero.jpg"

export const IMAGES = {
  hero: "../assets/zero.jpg",
  productBox: "../assets/zero.jpg",
  zerodiab: "../assets/zero.jpg",
  albumex: "../assets/zero.jpg",
  callfizz: "../assets/zero.jpg",
  myotex: "../assets/zero.jpg",
  gluzen: "../assets/zero.jpg",
  extras: "../assets/zero.jpg",
};
// export const IMAGES = {
//   hero: "/assets/hero.jpg",
//   productBox: "/assets/productbox.jpg",
//   zerodiab: "/assets/zerodiab.jpg",
//   albumex: "/assets/albumex.jpg",
//   callfizz: "/assets/callfizz.jpg",
//   myotex: "/assets/myotex.jpg",
//   gluzen: "/assets/gluzen.jpg",
//   extras: "/assets/extras.jpg",
// };

export const products = [
  {
    id: "zerodiab",
    name: "ZeroDiab",
    short: "Anti-Diabetic Syrup — 300ml",
    image: IMAGES.hero,
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
    image: IMAGES.albumex,
    color: "bg-rose-600",
    features: [
      "Complete amino acids",
      "Easily digestible",
      "Sugar free option",
    ],
  },
  {
    id: "callfizz",
    name: "Callfizz-Plus",
    short: "Bone Mineralization Tablets",
    image: IMAGES.callfizz,
    color: "bg-emerald-600",
    features: ["Calcium + D3", "Effervescent tablets", "Great for all ages"],
  },
  {
    id: "myotex",
    name: "Myotex-Plus",
    short: "PCOS Support",
    image: IMAGES.myotex,
    color: "bg-pink-500",
    features: [
      "Regulates cycles",
      "Supports fertility",
      "Rich micronutrient profile",
    ],
  },
];
