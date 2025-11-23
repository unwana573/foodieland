import React, { useState } from 'react';
import { Check, Circle } from 'lucide-react';

function Sidebar() {
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const toggleIngredient = (index) => {
    setCheckedIngredients(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const mainIngredients = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet"
  ];

  const sauceIngredients = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet"
  ];

  const otherRecipes = [
    {
      id: 1,
      title: "Chicken Meatballs with Creamy Chees...",
      author: "By Andreas Paula",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=200&h=150&fit=crop"
    },
    {
      id: 2,
      title: "The Creamiest Creamy Chicken an...",
      author: "By Andreas Paula",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=150&fit=crop"
    },
    {
      id: 3,
      title: "The Best Easy One Pot Chicken and Rice",
      author: "By Andreas Paula",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200&h=150&fit=crop"
    }
  ];

  const directions = [
    {
      step: 1,
      title: "Lorem ipsum dolor sit amet",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop"
    },
    {
      step: 2,
      title: "Lorem ipsum dolor sit amet",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
      step: 3,
      title: "Lorem ipsum dolor sit amet",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <div className="lg:col-span-3 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ingredients</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For main dish</h3>
                <div className="space-y-3">
                  {mainIngredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <button
                        onClick={() => toggleIngredient(index)}
                        className="flex-shrink-0"
                      >
                        {checkedIngredients.includes(index) ? (
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <Circle className="w-6 h-6 text-gray-300" />
                        )}
                      </button>
                      <span className={`text-gray-600 ${checkedIngredients.includes(index) ? 'line-through opacity-50' : ''}`}>
                        {ingredient}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For the sauce</h3>
                <div className="space-y-3">
                  {sauceIngredients.map((ingredient, index) => (
                    <div key={index + 10} className="flex items-center gap-3">
                      <button
                        onClick={() => toggleIngredient(index + 10)}
                        className="flex-shrink-0"
                      >
                        {checkedIngredients.includes(index + 10) ? (
                          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <Circle className="w-6 h-6 text-gray-300" />
                        )}
                      </button>
                      <span className={`text-gray-600 ${checkedIngredients.includes(index + 10) ? 'line-through opacity-50' : ''}`}>
                        {ingredient}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='text-left'>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 ">Directions</h2>
              
              <div className="space-y-12">
                {directions.map((direction) => (
                  <div key={direction.step}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <span className="font-bold text-gray-900">{direction.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {direction.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {direction.description}
                        </p>
                      </div>
                    </div>
                    
                    {direction.image && (
                      <img
                        src={direction.image}
                        alt={`Step ${direction.step}`}
                        className="w-full rounded-3xl object-cover mb-6"
                      />
                    )}
                    
                    <p className="text-gray-600 leading-relaxed">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-6 space-y-6">

              <div className='text-left'>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Other Recipe</h3>
                <div className="space-y-4">
                  {otherRecipes.map((recipe) => (
                    <div key={recipe.id} className="flex gap-3 group cursor-pointer">
                      <div className="flex-shrink-0 w-24 h-20 rounded-2xl overflow-hidden">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-gray-700">
                          {recipe.title}
                        </h4>
                        <p className="text-xs text-gray-500">{recipe.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div className="bg-gradient-to-br from-teal-700 to-teal-600 p-6 text-white text-center">
                <p className="text-xl font-bold mb-4 italic">
                  Mix Tarragon and Avocado Salad
                </p>
                <div className="w-32 h-32 mx-auto bg-white rounded-full overflow-hidden mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop"
                    alt="Salad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs opacity-90">www.foodieland.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;