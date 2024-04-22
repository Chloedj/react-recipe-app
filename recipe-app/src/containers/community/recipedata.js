import LadyRudy from "../../assets/LadyRudy.png";
import spagbol from "../../assets/spagbol.png";
import emilyrose from "../../assets/emilyrose.png";
import roastchicken from "../../assets/roastchicken.png";
import susanh from "../../assets/susanh.png";
import vegetablepotpie from "../../assets/vegetablepotpie.png";
import lilaclaura from "../../assets/lilaclaura.png";
import gardensalad from "../../assets/gardensalad.png";


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

  {
    id: 3,
    authorimage: susanh,
    name: "Vegetable Pot Pie",
    author: "Susan H",
    description: "I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations.",
    recipeImageUrl: vegetablepotpie,
    likes: 3,
  },

  {
    id: 4,
    authorimage: lilaclaura,
    name: "Fresh Garden Salad",
    author: "Lilac Laura",
    description: "I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level.",
    recipeImageUrl: gardensalad,
    likes: 1,
  },
]

export default recipeData;