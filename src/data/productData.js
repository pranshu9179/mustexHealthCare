// import imgZero1 from "../assets/zerodiab.jpg";
// import imgZero2 from "../assets/zero.jpg";

// import imgAlbumex1 from "../assets/albumex.jpg";
// import imgAlbumex2 from "../assets/albumex2.png"; // add more if available

// export const productData = {
//   zerodiab: {
//     id: "zerodiab",
//     title: "Herbal Anti-diabetic Syrup – Jamun, Neem, Karela",
//     images: [imgZero1, imgZero2],
//     shortDescription:
//       "Natural herbal formulation supporting healthy blood sugar levels.",
//     specifications: [
//       ["Product Type", "Herbal Syrup"],
//       ["Ingredients", "Karela, Jamun, Neem"],
//       ["Packaging", "Bottle"],
//       ["Storage", "Cool, dry place"],
//     ],
//     overview:
//       "This Ayurvedic Anti-diabetic Syrup is prepared using natural extracts such as Karela & Jamun. It helps regulate insulin secretion, improve digestion, and maintain healthy blood sugar levels.",
//     features: [
//       "Helps curb sugar cravings",
//       "Improves metabolism",
//       "Boosts digestion and immunity",
//     ],
//     benefits: [
//       "Useful for diabetic patients",
//       "Supports heart health",
//       "Helps with detoxification",
//     ],
//   },

//   // ⭐⭐⭐ ALBUMEX FULL DETAILS ⭐⭐⭐
//   albumex: {
//     id: "albumex",
//     title: "Albumex – High Quality Oral Albumin & Glutamine, Rich Protein Source",
//     images: [imgAlbumex1, imgAlbumex2], // Add more product images
//     shortDescription:
//       "High-quality protein supplement loaded with essential vitamins.",
//     specifications: [
//       ["Product Type", "Protein Powder"],
//       ["Flavour", "Vanilla"],
//       ["Contains", "Albumin, Glutamine, Folic Acid, Biotin"],
//       ["Weight", "200gm"],
//       ["Sugar Free", "Yes"],
//     ],
//     overview:
//       "Albumex is a high-quality oral albumin powder enriched with glutamine, biotin, folic acid, and essential vitamins. Ideal for boosting immunity, improving digestion, repairing body tissues, and providing complete protein nutrition.",
//     features: [
//       "Easily digestible",
//       "Highly bioavailable",
//       "Contains all nine essential amino acids",
//       "Low fat, zero cholesterol",
//       "Suitable for dairy-sensitive individuals",
//     ],
//     benefits: [
//       "Supports muscle repair",
//       "Boosts energy levels",
//       "Improves metabolism",
//       "Strengthens overall immunity",
//       "Rich source of vitamins A, B-complex, C, D3, E, K & Biotin",
//     ],
//   },
// };
 



// ============================================
// IMPORT PRODUCT IMAGES
// ============================================

// ZeroDiab
import imgZero1 from "../assets/zerodiab.jpg";
import imgZero2 from "../assets/zero.jpg";
import imgZero3 from "../assets/zero1.png";

// Albumex
import imgAlbumex1 from "../assets/albumex.jpg";
import imgAlbumex2 from "../assets/albumex2.png"; // Add more if available
import imgAlbumex3 from "../assets/albumex3.png"; // Add more if available

//callfizz
import imgCallfizz1 from "../assets/callfizz.jpg";  
import imgCallfizz2 from "../assets/callfizz1.jpg";
import imgCallfizz3 from "../assets/callfizz2.jpg";
// import imgCallfizz4 from "../assets/callfizz3.jpg";
import imgCallfizz5 from "../assets/callfizz4.jpg";
import imgCallfizz6 from "../assets/callfizz5.png";

//gluzenQ
import imgGluzen1 from "../assets/gluzenQ.jpg";
import imgGluzen2 from "../assets/gluzenQ1.png";
import imgGluzen3 from "../assets/gluzenQ2.png";

//myotexplus
import imgMyotex1 from "../assets/myotexplus.jpg";
import imgMyotex2 from "../assets/myotex+.jpg"; // optional if available
import imgMyotex3 from "../assets/myotex1.png"; // optional if available
import imgMyotex4 from "../assets/myotex2.png"; // optional if available


// ============================================
// PRODUCT DATA OBJECT (Dynamic for all products)
// ============================================

export const productData = {
  // =========================== ZERO DIAB ===========================
  zerodiab: {
    id: "zerodiab",
    title: "Herbal Anti-diabetic Syrup – Jamun, Neem, Karela",
    images: [imgZero1, imgZero2, imgZero3],

    shortDescription:
      "Natural herbal formulation supporting healthy blood sugar levels.",

    specifications: [
      ["Product Type", "Herbal Syrup"],
      ["Ingredients", "Karela, Jamun, Neem"],
      ["Packaging", "Bottle"],
      ["Quantity", "Varied"],
      ["Storage", "Cool, dry place"],
      ["Manufacturing Process", "Herbal extraction"],
      [
        "Features",
        "Blood sugar control, Digestion support, Immunity boost",
      ],
    ],

overview:
  "ZeroDiab is a natural Ayurvedic formulation crafted with time-trusted ingredients such as Karela, Jamun, and Neem. These herbs are known for their strong anti-diabetic and metabolic benefits. The syrup helps regulate insulin secretion, supports healthy pancreas function, and improves glucose utilization in the body. Its herbal blend also aids in maintaining digestive health, reducing sugar cravings, and enhancing overall energy levels. Regular use may help stabilize blood sugar fluctuations, support heart health, and promote better immunity. ZeroDiab is suitable for individuals seeking a natural approach to maintaining balanced blood sugar levels and improving metabolic wellness.",


    features: [
      "Helps curb sugar cravings",
      "Improves metabolism",
      "Boosts digestion and immunity",
    ],

    benefits: [
      "Useful for diabetic patients",
      "Supports heart health",
      "Helps with detoxification",
    ],
  },

  // =========================== ALBUMEX ===========================
  albumex: {
    id: "albumex",
    title: "Albumex – High Quality Oral Albumin & Glutamine, Rich Protein Source",
    images: [imgAlbumex1, imgAlbumex2, imgAlbumex3],

    shortDescription:
      "High-quality protein supplement loaded with essential vitamins.",

    specifications: [
      ["Product Type", "Protein Powder"],
      ["Flavour", "Vanilla"],
      ["Contains", "Albumin, Glutamine, Folic Acid, Biotin"],
      ["Weight", "200gm"],
      ["Sugar Free", "Yes"],
      ["Easily Digestible", "Yes"],
      ["Amino Acids", "Contains all nine essential amino acids"],
      ["Fat / Cholesterol", "No fat, No cholesterol"],
      [
        "Suitable For",
        "People with dairy sensitivities (no whey or casein proteins)",
      ],
    ],

overview:
  "Albumex is a premium-quality oral albumin supplement designed to deliver complete protein nutrition in a highly absorbable form. Enriched with glutamine, folic acid, biotin, and essential vitamins, Albumex supports muscle repair, tissue growth, and overall wellness. Its smooth digestibility makes it ideal for individuals with weak digestion, elderly patients, athletes, and people recovering from illness or surgery. Albumex also helps maintain healthy metabolism, improves nutrient absorption, and boosts immunity. Since it is free from whey and casein, it is suitable for people with dairy intolerance and those looking for a pure, gentle, and easily digestible protein source. Whether used for daily nutrition or targeted recovery, Albumex provides a clean and effective way to meet the body's protein and micronutrient needs.",

    features: [
      "Easily Digestible",
      "Highly Bioavailable",
      "Contains all nine essential amino acids",
      "Low fat, zero cholesterol",
      "Sugar-free formulation",
      "Suitable for dairy-sensitive individuals",
    ],

    benefits: [
      "Supports muscle repair and recovery",
      "Boosts energy levels",
      "Enhances metabolism",
      "Strengthens overall immunity",
      "Promotes healthy cell repair",
      "Provides essential vitamins & minerals",
    ],
  },

callfizzplus: {
  id: "callfizzplus",
  title: "Callfizz-Plus – Bone Mineralization Effervescent Tablets",

  images: [imgCallfizz1, imgCallfizz2, imgCallfizz3, imgCallfizz5, imgCallfizz6],

  shortDescription:
    "Effervescent tablets designed to support bone strength, calcium absorption, and healthy growth.",

  specifications: [
    ["Product Type", "Effervescent Bone Mineralization Tablets"],
    ["Packaging", "Tube of 15 Tablets"],
    ["Suitable For", "Children, Adolescents, Pregnant Women & Adults"],
    ["Key Benefit", "Bone Strength & Improved Calcium Absorption"],
    ["How to Use", "Drop → Fizz → Drink (1 tablet in 250ml water)"],
    ["Flavour", "Orange"],
  ],

  overview:
    "Callfizz-Plus is a powerful effervescent bone-health supplement crafted to support strong bones, healthy growth, and proper calcium absorption. Its unique fizz formulation ensures faster nutrient delivery compared to traditional tablets, making it easier for the body to absorb and utilize essential minerals. This makes Callfizz-Plus ideal for children during growth years, adolescents with increased bone-building needs, pregnant women requiring additional calcium support, and adults looking to maintain bone density. With Vitamin D3 and essential minerals, it helps prevent bone loss, reduces the risk of fractures, and supports natural bone regeneration. The refreshing orange flavour enhances daily compliance, making bone care simple, enjoyable, and effective.",

  features: [
    "Effervescent format for fast absorption",
    "Supports bone building and regeneration",
    "Enhances calcium utilization with Vitamin D3",
    "Ideal for growing children and active adults",
    "Helps maintain bone mass during aging",
    "Pleasant orange flavour for easy daily use",
  ],

  benefits: [
    "Promotes stronger bones and reduces osteoporosis risk",
    "Supports healthy growth in children and adolescents",
    "Reduces leg cramps and fatigue caused by low calcium",
    "Enhances muscle function and joint health",
    "Supports pregnancy and fetal bone development",
    "Improves nutrient absorption and overall bone density",
  ],
},

myotexplus: {
  id: "myotexplus",
  title: "Myotex-Plus – PCOS Support Formula with Myo-Inositol & Essential Nutrients",

  images: [imgMyotex1, imgMyotex2, imgMyotex3, imgMyotex4], // add more images if available

  shortDescription:
    "A clinically formulated PCOS support supplement that helps balance hormones, improve fertility, and regulate menstrual cycles.",

  specifications: [
    ["Product Type", "Chewable Tablets"],
    ["Key Ingredients", "Myo-Inositol, L-Arginine, D-Chiro Inositol, L-Methylfolate, Melatonin, Vitamin B6, Vitamin D3, Zinc, Chromium"],
    ["Primary Use", "PCOS management & fertility support"],
    ["Dosage Form", "1 × 10 Chewable Tablets"],
    ["Suitable For", "Women with PCOS, irregular cycles, hormonal imbalance"],
    ["Primary Action", "Improves insulin sensitivity & reproductive function"],
  ],

  overview:
    "Myotex-Plus is a comprehensive dietary supplement specially formulated to support women dealing with PCOS, irregular menstrual cycles, and hormonal imbalance. It uses the clinically validated 40:1 ratio of Myo-Inositol to D-Chiro Inositol, known to improve insulin sensitivity, regulate ovulation, and enhance reproductive functioning. The presence of L-Arginine promotes better blood flow to reproductive organs, while essential nutrients such as Vitamin B6, Vitamin D3, Zinc, and Chromium help stabilize hormones and support metabolic health. L-Methylfolate provides superior folate absorption, supporting fertility and cell development, while Melatonin encourages restful sleep, aiding hormonal recovery. Myotex-Plus helps improve menstrual regularity, supports follicular development, enhances ovulation quality, and reduces common PCOS symptoms such as acne, irregular cycles, weight gain, and mood fluctuations. With consistent use, it promotes hormonal balance, metabolic wellness, and improved fertility outcomes.",

  features: [
    "Clinically balanced inositol ratio for faster hormonal response",
    "Supports regular menstrual cycles",
    "Enhances ovarian function and follicular development",
    "Improves insulin sensitivity and reduces PCOS symptoms",
    "Helps restore hormonal balance naturally",
    "Supports fertility and improves ovulation quality",
    "Contains essential vitamins and minerals for women's health",
  ],

  benefits: [
    "Lowers risk of metabolic syndrome",
    "Helps relieve symptoms of PCOS and hormonal imbalance",
    "Reduces risk of gestational diabetes and preterm birth",
    "Supports insulin regulation and glucose metabolism",
    "Improves cholesterol and overall metabolic health",
    "Reduces mood swings, anxiety, and depressive symptoms",
    "Promotes better reproductive health and pregnancy outcomes",
  ],
},
gluzenq: {
  id: "gluzenq",
  title: "Gluzen-Q – L-Glutamine & Co-Enzyme Q10 Sachet (15gm)",

  images: [imgGluzen1, imgGluzen2, imgGluzen3],

  shortDescription:
    "A powerful gut-health and recovery supplement enriched with L-Glutamine and Co-Enzyme Q10 for immunity, energy and nutrient absorption.",

  specifications: [
    ["Product Type", "Nutraceutical Sachet"],
    ["Net Weight", "15 gm"],
    ["Key Ingredients", "L-Glutamine 10gm, Co-Enzyme Q10 100mg"],
    ["Packaging", "Sachet"],
    ["Suitable For", "Adults, Post-surgery patients, Athletes, Gut-health support"],
    ["Primary Benefit", "Gut health, recovery & cellular energy"],
  ],

  overview:
    "Gluzen-Q is a scientifically formulated gut-health and recovery supplement that combines the powerful effects of L-Glutamine and Co-Enzyme Q10. L-Glutamine supports the synthesis of muscle proteins, enhances electrolyte balance, and improves water absorption in the intestine—making it highly effective for repairing gut lining and restoring digestive health. Co-Enzyme Q10 acts as a strong antioxidant that protects cells from oxidative damage, boosts cellular energy production, and supports cardiovascular and immune health. Together, these ingredients make Gluzen-Q ideal for individuals recovering from surgery, people with gut sensitivity, athletes needing muscle repair, and anyone experiencing low energy or poor nutrient absorption. Its easy-to-consume sachet format ensures quick absorption and rapid action, helping the body maintain vitality, resilience, and overall wellness.",

  features: [
    "L-Glutamine improves gut lining & intestinal absorption",
    "Co-Enzyme Q10 boosts cellular energy",
    "Supports immunity and tissue repair",
    "Helps recover after surgery or physical stress",
    "Fast-acting sachet format for better absorption",
    "Antioxidant protection for heart & overall health",
  ],

  benefits: [
    "Promotes healthy gut function",
    "Enhances recovery after surgery",
    "Improves nutrient uptake and digestion",
    "Boosts immune system response",
    "Increases cellular energy production",
    "Improves fertility & reproductive health",
  ],
},


};
