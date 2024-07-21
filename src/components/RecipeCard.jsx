import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { GiMeal } from "react-icons/gi";
import { GoTrophy } from "react-icons/go";
import PropTypes from 'prop-types';

const RecipeCard = ({recipe}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
                <Link to={`${recipe.id}`}>
                  <div className="w-full max-x`h-[300px] overflow-hidden rounded-md">
                    <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" src={recipe.image} alt="" />
                  </div>
                </Link>
                <h2 className="text-2xl font-medium mt-2">{recipe.name}</h2>
                <div className="flex flex-col gap-1 mt-3">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="flex items-center gap-1 text-gray-400"><IoMdTime />Cooking time</span>
                     : {recipe.cookTimeMinutes} min
                    </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="flex items-center gap-1 text-gray-400"><GiMeal />Cuisine</span> : <span>{recipe.cuisine}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="flex items-center gap-1 text-gray-400"><GoTrophy />Difficulty</span> : <span>{recipe.difficulty}</span>
                  </div>
                </div>
      </div>
  )
}

RecipeCard.propTypes = {
  recipe : PropTypes.shape({
    id: PropTypes.number.isRequired,
    image : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    cookTimeMinutes : PropTypes.number.isRequired,
    cuisine : PropTypes.string.isRequired,
    difficulty : PropTypes.string.isRequired
  })
}

export default RecipeCard