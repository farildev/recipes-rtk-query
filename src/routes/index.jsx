import { Routes, Route } from "react-router-dom";
import Recipes from "@/views/Recipes";
import RecipeDetail from "@/views/RecipeDetail";
import Home from "@/views/Home";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const AllRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
