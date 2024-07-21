import { useGetRecipesQuery } from "@/store/services/recipeApi";
import RecipeCard from "@/components/RecipeCard";
import LoadingScreen from "@/components/LoadingScreen";
import ErrorPage from "@/components/ErrorPage";
import { motion } from "framer-motion";
const Recipes = () => {
  const { data, isLoading, error } = useGetRecipesQuery();

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorPage />;
  
  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };
  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pb-[50px]"
    >
      <div className="siteContainer">
        <h1 className="text-2xl mt-5 font-medium">Reseptler</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-5">
          {data.recipes.map((recipe, index) => (
            <RecipeCard recipe={recipe} key={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Recipes;
