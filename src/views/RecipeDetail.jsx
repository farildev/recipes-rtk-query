import { useParams } from "react-router-dom";
import { useGetRecipesQuery } from "@/store/services/recipeApi";
import { IoMdTime, IoIosArrowRoundBack } from "react-icons/io";
import { GiMeal } from "react-icons/gi";
import { GoTrophy } from "react-icons/go";
import { AiOutlineFire } from "react-icons/ai";
import { LiaHashtagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecipeDetail = () => {
  const { data } = useGetRecipesQuery();
  const { id } = useParams();
  const recipeDetail = data.recipes.find(
    (recipe) => recipe.id === parseInt(id)
  );

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
      className="py-[50px] h-screen"
    >
      <div className="siteContainer">
        <Link
          className="flex items-center gap-1 bg-black w-fit text-white p-2 outline-none border-none rounded-full text-sm"
          to={"/recipes"}
        >
          <IoIosArrowRoundBack size={20} />
          Geri qayit
        </Link>
        <div className="flex justify-between md:flex-row flex-col mt-10">
          <div className="md:w-[55%] w-full">
            <div className="w-full max-h-[600px] border-[5px] border-gray-300 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={recipeDetail.image}
                alt=""
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1 mt-3">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="flex items-center gap-1 text-gray-400">
                    <IoMdTime />
                    Cooking time
                  </span>
                  : {recipeDetail.cookTimeMinutes} min
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="flex items-center gap-1 text-gray-400">
                    <GiMeal /> Cuisine
                  </span>{" "}
                  : <span>{recipeDetail.cuisine}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="flex items-center gap-1 text-gray-400">
                    <GoTrophy />
                    Difficulty
                  </span>{" "}
                  : <span>{recipeDetail.difficulty}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="flex items-center gap-1 text-gray-400">
                    <IoMdTime />
                    Preparation time
                  </span>
                  : {recipeDetail.prepTimeMinutes} min
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="flex items-center gap-1 text-gray-400">
                    <AiOutlineFire />
                    Calories
                  </span>{" "}
                  : <span>{recipeDetail.caloriesPerServing}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="flex items-center gap-1 text-gray-400">
                    <LiaHashtagSolid />
                    Tags
                  </span>{" "}
                  :{" "}
                  <span className="flex items-center gap-1">
                    {recipeDetail.tags.map((tag) => (
                      <span
                        className="bg-gray-300 p-1 text-xs text-gray-500 rounded-sm"
                        key={tag.id}
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:w-[50%] w-full md:px-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-medium mb-7 bg-black text-white p-2 rounded-md">
                {recipeDetail.name}
              </h1>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl">Ingredients</h1>
                <ul>
                  {recipeDetail.ingredients.map((ing, index) => (
                    <li className="text-md text-gray-500" key={index}>
                      -{ing}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl">Instructions</h1>
                <ul>
                  {recipeDetail.instructions.map((ins, index) => (
                    <li key={index} className="text-sm text-gray-500">
                      -{ins}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RecipeDetail;
