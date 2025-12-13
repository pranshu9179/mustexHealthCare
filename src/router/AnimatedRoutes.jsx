// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

// import PageWrapper from "../components/PageWrapper";
// import Home from "../pages/Home";
// import ProductsPage from "../pages/ProductsPage";
// import About from "../pages/About";
// import Contact from "../pages/Contact";

// export default function AnimatedRoutes() {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes key={location.pathname} location={location}>
//         <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
//         <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
//         <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
//         <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
//       </Routes>
//     </AnimatePresence>
//   );
// }






import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageWrapper from "../components/PageWrapper";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductDetail from "../components/productsDetails/ProductDetails";  // ⭐ Add this

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

        {/* ⭐ Add THIS NEW ROUTE */}
        <Route path="/product/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />

      </Routes>
    </AnimatePresence>
  );
}
