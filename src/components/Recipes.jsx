import React, { useState } from 'react';
import { Clock, Utensils, Heart } from 'lucide-react';

function Recipes() {
  const [likedRecipes, setLikedRecipes] = useState([1, 3, 8]);

  const recipes = [
    {
      id: 1,
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      time: "30 Minutes",
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Western",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Healthy Japanese Fried Rice with Asparagus",
      time: "30 Minutes",
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      time: "30 Minutes",
      category: "Eastern",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      time: "30 Minutes",
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Barbeque Spicy Sandwiches with Chips",
      time: "30 Minutes",
      category: "Snack",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Firecracker Vegan Lettuce Wraps - Spicy!",
      time: "30 Minutes",
      category: "Seafood",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      title: "Chicken Ramen Soup with Mushroom",
      time: "30 Minutes",
      category: "Japanese",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop"
    }
  ];

  const toggleLike = (id) => {
    setLikedRecipes(prev => 
      prev.includes(id) 
        ? prev.filter(recipeId => recipeId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="py-16 px-4 mt-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">
              Try this delicious recipe
            </h2>
            <h3 className="text-5xl font-bold text-gray-900">
              to make your day
            </h3>
          </div>
          <p className="text-gray-500 max-w-md">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua enim ad minim
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >

              <div className="relative h-56 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => toggleLike(recipe.id)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2.5 shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      likedRecipes.includes(recipe.id)
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
              

              <div className="p-6 text-left">
                <h3 className="font-semibold text-gray-900 text-lg mb-4 leading-tight min-h-[3.5rem]">
                  {recipe.title}
                </h3>
                
                <div className="flex items-center gap-5 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5" />
                    <span>{recipe.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes;