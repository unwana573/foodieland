import React, { useState } from 'react';
import { Search } from 'lucide-react';

function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      id: 1,
      title: "Crochet Projects for Noodle Lovers",
      excerpt: "Lorem ipsum dolor sit amet, consectetuip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim",
      author: "Wade Warren",
      date: "12 November 2021",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
      authorAvatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      title: "10 Vegetarian Recipes To Eat This Month",
      excerpt: "Lorem ipsum dolor sit amet, consectetuip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim",
      author: "Robert Fox",
      date: "12 November 2021",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop",
      authorAvatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      id: 3,
      title: "Full Guide to Becoming a Professional Chef",
      excerpt: "Lorem ipsum dolor sit amet, consectetuip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim",
      author: "Dianne Russell",
      date: "12 November 2021",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=200&fit=crop",
      authorAvatar: "https://i.pravatar.cc/150?img=45"
    },
    {
      id: 4,
      title: "Simple & Delicious Vegetarian Lasagna",
      excerpt: "Lorem ipsum dolor sit amet, consectetuip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim",
      author: "Leslie Alexander",
      date: "12 November 2021",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=200&fit=crop",
      authorAvatar: "https://i.pravatar.cc/150?img=25"
    },
    {
      id: 5,
      title: "Plantain and Pinto Stew with Aji Verde",
      excerpt: "Lorem ipsum dolor sit amet, consectetuip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim",
      author: "Courtney Henry",
      date: "12 November 2021",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop",
      authorAvatar: "https://i.pravatar.cc/150?img=20"
    },
    {
      id: 6,
      title: "We're Hiring a Communications Assistant!",
      excerpt: "Lorem ipsum dolor sit amet, consectetuip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim",
      author: "Albert Flores",
      date: "12 November 2021",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop",
      authorAvatar: "https://i.pravatar.cc/150?img=51"
    }
  ];

  const tastyRecipes = [
    {
      id: 1,
      title: "Chicken Meatballs with Cream Cheese",
      author: "By Andreas Paula",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=200&h=150&fit=crop"
    },
    {
      id: 2,
      title: "Traditional Bolognaise Ragu",
      author: "By Andreas Paula",
      image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=200&h=150&fit=crop"
    },
    {
      id: 3,
      title: "Pork and Chive Chinese Dumplings",
      author: "By Andreas Paula",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=200&h=150&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog & Article</h1>
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>


          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search article, news or recipe..."
              className="w-full px-6 py-4 pr-32 rounded-2xl border border-gray-200 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium">
              Search
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex gap-6 group cursor-pointer">
                <div className="flex-shrink-0 w-48 h-36 rounded-3xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold">{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tasty Recipes</h2>
              <div className="space-y-4">
                {tastyRecipes.map((recipe) => (
                  <div key={recipe.id} className="flex gap-4 group cursor-pointer">
                    <div className="flex-shrink-0 w-24 h-20 rounded-2xl overflow-hidden">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-gray-700">
                        {recipe.title}
                      </h4>
                      <p className="text-xs text-gray-500">{recipe.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-gradient-to-br from-teal-700 to-teal-600  p-8 text-white text-center">
              <p className="text-2xl font-bold mb-6 italic">
                Don't forget to eat<br />healthy food
              </p>
              <div className="w-40 h-40 mx-auto bg-white rounded-full overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop"
                  alt="Healthy food"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm opacity-90">www.foodieland.com</p>
            </div>
          </div>
        </div>


        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className={`w-12 h-12 rounded-xl flex items-center justify-center font-semibold transition-colors ${
              currentPage === 1
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            1
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            2
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            3
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            4
          </button>
          <button className="w-12 h-12 rounded-xl flex items-center justify-center font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            5
          </button>
          <span className="text-gray-400 px-2">...</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="w-12 h-12 rounded-xl flex items-center justify-center font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;