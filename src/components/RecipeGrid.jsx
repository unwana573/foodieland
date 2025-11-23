import React from 'react';
import { Clock, Utensils, Heart } from 'lucide-react';

function RecipeGrid() {
  const recipes = [
    {
      id: 1,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Snack",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      liked: true,
      bgColor: "bg-purple-600"
    },
    {
      id: 2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      time: "30 Minutes",
      category: "Fish",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      liked: false,
      bgColor: "bg-gray-900"
    },
    {
      id: 3,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      time: "30 Minutes",
      category: "Breakfast",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop",
      liked: false,
      bgColor: "bg-gray-700"
    },
    {
      id: 4,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      time: "30 Minutes",
      category: "Healthy",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      liked: true,
      bgColor: "bg-teal-700"
    },
    {
      id: 5,
      title: "Chicken Meatballs with Cream Cheese",
      time: "30 Minutes",
      category: "Meat",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
      liked: true,
      bgColor: "bg-gray-800"
    },
    {
      id: 6,
      title: "Don't forget to eat healthy food",
      time: "",
      category: "",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      isAd: true,
      bgColor: "bg-teal-800"
    },
    {
      id: 7,
      title: "Fruity Pancake with Orange & Blueberry",
      time: "30 Minutes",
      category: "Sweet",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      liked: true,
      bgColor: "bg-gray-900"
    },
    {
      id: 8,
      title: "The Best Easy One Pot Chicken and Rice",
      time: "30 Minutes",
      category: "Snack",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
      liked: false,
      bgColor: "bg-blue-50"
    },
    {
      id: 9,
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
      time: "30 Minutes",
      category: "Noodles",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
      liked: false,
      bgColor: "bg-[#E5F7FD]"
    }
  ];

  return (
    <div className="min-h-screen mt-10 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Simple and tasty recipes
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua et enim ad minim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {recipes.map((recipe) => (
            <div key={recipe.id} className=" overflow-hidden ">
              {recipe.isAd ? (

                <div className={`${recipe.bgColor}  h-64 flex flex-col items-center justify-center text-white p-6 relative`}>
                  <div className="bg-white rounded-full w-32 h-32 mb-4 overflow-hidden">
                    <img src={recipe.image} alt="Healthy food" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xl font-semibold mb-2">{recipe.title}</p>
                  <p className="text-sm opacity-90">www.foodieland.com</p>
                </div>
              ) : (

                <>
                  <div className="relative h-48 ">
                    <div className={`absolute inset-0 ${recipe.bgColor} opacity-20`}></div>
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform">
                      <Heart 
                        className={`w-5 h-5 ${recipe.liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                      />
                    </button>
                  </div>
                  
                  <div className="p-5 bg-[#E5F7FD] text-left text-black">
                    <h3 className="font-semibold text-gray-900 text-lg mb-3 line-clamp-2 min-h-[3.5rem]">
                      {recipe.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 ">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Utensils className="w-4 h-4" />
                        <span>{recipe.category}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeGrid;