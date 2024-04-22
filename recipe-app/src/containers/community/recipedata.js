import LadyRudy from "../../assets/LadyRudy.png";
import spagbol from "../../assets/spagbol.png";
import emilyrose from "../../assets/emilyrose.png";
import roastchicken from "../../assets/roastchicken.png";

const recipeData = [
  {
    id: 1,
    authorimage: LadyRudy,
    name: "Spaghetti Bolognese",
    author: "Lady Rudy",
    description: "I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.",
    recipeImageUrl: spagbol,
    likes: 2,
  },

   {
    id: 2,
    authorimage: emilyrose,
    name: "Roasted Chicken",
    author: "Emily Rose",
    description: "I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow",
    recipeImageUrl: roastchicken,
    likes: 5,
  },
]

export default recipeData;