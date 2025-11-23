import React, { useState } from 'react';
import { Clock, Utensils, Heart } from 'lucide-react';

function Cards() {
  const [likedRecipes, setLikedRecipes] = useState([1, 3]);

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
    <div className="bg-white py-16 px-4 text-left">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Check out the delicious recipe
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="group cursor-pointer"
            >

              <div className="relative rounded-3xl overflow-hidden mb-4 aspect-[4/3]">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3 leading-tight">
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

export default Cards;