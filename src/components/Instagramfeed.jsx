import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Instagram } from 'lucide-react';

function InstagramFeed() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop",
      likes: "44,686",
      caption: "The vegetables dishes need to have certain vitamin for those people",
      date: "September 19"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
      likes: "44,686",
      caption: "Sweet food can bring people into happiness as long as they don't eat to much",
      date: "September 19"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=400&fit=crop",
      likes: "44,686",
      caption: "What are you doing before start cooking? Prepare the tools or ingredients?",
      date: "September 19"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
      likes: "44,686",
      caption: "Steak lover? Me too. It's suitable for you who want romantic dinner",
      date: "September 19"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-10 to-blue-50 py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua enim ad minim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">

              <div className="flex items-center justify-between p-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    F
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-sm">Foodieland</span>
                      <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500">Tokyo, Japan</span>
                  </div>
                </div>
                <button className="text-gray-600 hover:text-gray-900">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-square bg-gray-100">
                <img 
                  src={post.image} 
                  alt="Food post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                  1/3
                </div>
              </div>


              <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <button className="hover:text-gray-600 transition-colors">
                      <Heart className="w-6 h-6" />
                    </button>
                    <button className="hover:text-gray-600 transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </button>
                    <button className="hover:text-gray-600 transition-colors">
                      <Send className="w-6 h-6" />
                    </button>
                  </div>
                  <button className="hover:text-gray-600 transition-colors">
                    <Bookmark className="w-6 h-6" />
                  </button>
                </div>


                <div className="flex items-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-gray-900 rounded-full"></div>
                  <span className="text-sm font-semibold">
                    Liked by <span className="font-semibold">craig_love</span> and <span className="font-semibold">{post.likes}</span>
                  </span>
                </div>


                <div className="text-sm mb-1 text-left">
                  <span className="font-semibold">Foodieland</span>{' '}
                  <span className="text-gray-700">{post.caption}</span>
                </div>


                <div className="text-xs text-gray-400 uppercase text-left">
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors flex items-center gap-3 shadow-lg">
            Visit Our Instagram
            <Instagram className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstagramFeed;