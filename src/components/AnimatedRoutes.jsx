import { Home } from "../pages/home/Home";
import { Recipes } from "../pages/recipes/Recipes";
import { Meal } from "../pages/meal/Meal";
import { Reviews } from "../pages/reviews/Reviews";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="pages/*" element={<Recipes />} />
        <Route path="pages/meal/:id" element={<Meal />} />
        <Route path="pages/reviews/Reviews.jsx" element={<Reviews />} />
      </Routes>
    </AnimatePresence>
  );
};
