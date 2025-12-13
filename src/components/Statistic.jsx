// // // export default function Statistic({ label, value }) {
// // //   return (
// // //     <div className="bg-white rounded-lg p-4 shadow text-center">
// // //       <div className="text-2xl font-bold text-purple-600">{value}</div>
// // //       <div className="text-xs text-gray-500">{label}</div>
// // //     </div>
// // //   );
// // // }




// // import { motion, useInView, useAnimation } from "framer-motion";
// // import { useEffect, useRef } from "react";

// // export default function Statistic({ label, value }) {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true });
// //   const controls = useAnimation();

// //   // Extract numeric part for animation
// //   const numericValue = parseInt(value);
// //   const suffix = value.replace(numericValue, "");

// //   useEffect(() => {
// //     if (isInView) {
// //       controls.start({
// //         count: numericValue,
// //         transition: { duration: 1.5, ease: "easeOut" },
// //       });
// //     }
// //   }, [isInView, controls, numericValue]);

// //   return (
// //     <div
// //       ref={ref}
// //       className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
// //     >
// //       <motion.div
// //         animate={controls}
// //         initial={{ count: 0 }}
// //         className="text-4xl font-extrabold text-purple-600"
// //       >
// //         {Math.floor(controls.current?.count ?? 0)}
// //         {suffix}
// //       </motion.div>
// //       <div className="text-sm text-gray-500 mt-1">{label}</div>
// //     </div>
// //   );
// // }



// import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { useEffect, useRef } from "react";

// export default function Statistic({ label, value }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   // Extract numeric + suffix
//   const numericValue = parseInt(value); 
//   const suffix = value.replace(numericValue, "");

//   // Motion values
//   const count = useMotionValue(0);
//   const spring = useSpring(count, { stiffness: 80, damping: 20 });
//   const rounded = useTransform(spring, latest => Math.floor(latest));

//   useEffect(() => {
//     if (isInView) {
//       count.set(numericValue);
//     }
//   }, [isInView, count, numericValue]);

//   return (
//     <div
//       ref={ref}
//       className="bg-white shadow-md rounded-xl p-6 border border-gray-100 text-center"
//     >
//       <motion.div className="text-4xl font-extrabold text-purple-600 flex justify-center">
//         <motion.span>{rounded}</motion.span>
//         <span>{suffix}</span>
//       </motion.div>

//       <div className="text-sm text-gray-500 mt-1">{label}</div>
//     </div>
//   );
// }



// src/components/Statistic.jsx
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Statistic({ label, value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract numeric + suffix
  const numericValue = parseInt(value) || 0;
  const suffix = value.replace(numericValue, "");

  // Base motion value starting at 0
  const count = useMotionValue(0);

  // ULTRA-SMOOTH spring
  const smoothSpring = useSpring(count, {
    stiffness: 40, // lower = smoother
    damping: 12,   // lower = softer
    mass: 0.6,
  });

  // Rounded display value (motion value)
  const roundedMV = useTransform(smoothSpring, (v) => Math.floor(v));

  // Derive opacity motion value from the spring (works with useTransform)
  const opacityMV = useTransform(smoothSpring, (v) => (v > 0 ? 1 : 0.45));

  // Local state to display the rounded number (subscribe to motion value updates)
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // subscribe to rounded motion value changes
    const unsubscribe = roundedMV.on("change", (v) => {
      setDisplay(v);
    });

    return () => unsubscribe();
  }, [roundedMV]);

  // Trigger animation when in-view
  useEffect(() => {
    if (isInView) {
      // small delay so animation feels natural
      const t = setTimeout(() => {
        count.set(numericValue);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [isInView, count, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 flex flex-col items-center justify-center"
    >
      {/* SMOOTH NUMBER */}
      <motion.div
        className="text-4xl font-extrabold text-purple-600 flex items-center"
        style={{ opacity: opacityMV }}
      >
        <span>{display}</span>
        <span>{suffix}</span>
      </motion.div>

      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </motion.div>
  );
}
