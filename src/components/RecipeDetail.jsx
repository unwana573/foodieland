import React, { useState } from 'react';
import { Clock, Utensils, Printer, Share2, Play } from 'lucide-react';

function RecipeDetail() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Health Japanese Fried Rice',
        text: 'Check out this delicious recipe!',
      });
    } else {
      alert('Share this recipe with your friends!');
    }
  };

  return (
    <div className="min-h-screen bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Health Japanese Fried Rice
          </h1>


          <div className="flex flex-wrap items-center gap-8 mb-8">

            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/150?img=33"
                alt="John Smith"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">John Smith</p>
                <p className="text-sm text-gray-500">15 March 2022</p>
              </div>
            </div>


            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Prep Time</p>
                <p className="font-semibold text-sm">15 Minutes</p>
              </div>
            </div>


            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Cook Time</p>
                <p className="font-semibold text-sm">15 Minutes</p>
              </div>
            </div>


            <div className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-gray-900" />
              <span className="font-semibold text-sm">Chicken</span>
            </div>

          <div className="flex gap-4 ml-auto">
            <div className='block text-center'>
              <button
                onClick={handlePrint}
                className="flex-1 flex flex-col items-center justify-center gap-2 py-4 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                >
                <Printer className="w-16 h-6 text-gray-900" />
              </button>
              <span className="text-xs font-semibold uppercase">Print</span>
            </div>
            <div className="block text-center">
              <button
                onClick={handleShare}
                className="flex-1 flex flex-col items-center justify-center gap-2 py-4 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                >
                <Share2 className="w-16 h-6 text-gray-900" />
              </button>
                <span className="text-xs font-semibold uppercase">Share</span>
            </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-video">
              <img
                src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&h=600&fit=crop"
                alt="Health Japanese Fried Rice"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
          </div>


          <div className="space-y-6">

            


            <div className="bg-blue-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nutrition Information
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Calories</span>
                  <span className="font-semibold text-gray-900">219.9 kcal</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Total Fat</span>
                  <span className="font-semibold text-gray-900">10.7 g</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Protein</span>
                  <span className="font-semibold text-gray-900">7.9 g</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Carbohydrate</span>
                  <span className="font-semibold text-gray-900">22.3 g</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="text-gray-600">Cholesterol</span>
                  <span className="font-semibold text-gray-900">37.4 mg</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center">
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>


        <div className="max-w-4xl">
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;