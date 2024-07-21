import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiHotMeal } from "react-icons/gi";

const Home = () => {
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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="h-screen bg-meal bg-center bg-cover relative"
    >
      <div className="w-screen h-screen absolute bg-black/85"></div>
      <div className="z-20 absolute top-0 left-0 right-0 bottom-0 text-white siteContainer flex items-center justify-center h-full">
        <div className="flex items-center justify-center h-full flex-col gap-5">
          <h1 className="md:text-8xl xs:text-6xl text-5xl font-semibold text-center w-full">
            Explore the <span className="text-orange-400">meals</span>
          </h1>
          <Link
            className="bg-orange-600 py-3 px-5 rounded-full flex items-center gap-1 md:text-ms text-sm"
            to={"/recipes"}
          >
            <GiHotMeal size={25} />
            See all recipes
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
