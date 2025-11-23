import { Facebook, Twitter, Instagram } from 'lucide-react';
import womanchef from "../assets/womanchef.png"

function Article() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 text-left">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                How did you start out in the food industry?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id felis ex. Praesent feugiat elementum ex ut suscipit.
              </p>
            </div>


            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                What do you like most about your job?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id felis ex. Praesent feugiat elementum ex ut suscipit.
              </p>
            </div>


            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Do you cook at home on your days off?
              </h2>
              <div className="rounded-2xl overflow-hidden mb-6">
                <img 
                  src={ womanchef } 
                  alt="Woman cooking in home kitchen with fresh ingredients"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id felis ex. Praesent feugiat elementum ex ut suscipit.
              </p>
            </div>


            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                What would your advice be to young people looking to get their foot in the door?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id felis ex. Praesent feugiat elementum ex ut suscipit.
              </p>
            </div>


            <div className="border-l-4 border-gray-900 pl-6 py-4 my-12">
              <p className="text-2xl md:text-3xl italic text-gray-900 leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio."
              </p>
            </div>


            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                What is the biggest misconception that people have about being a professional chef?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id felis ex. Praesent feugiat elementum ex ut suscipit.
              </p>
            </div>
          </div>


          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-xs font-bold text-gray-900 mb-6 uppercase tracking-wider">
                Share This On
              </h3>

              <div className="flex flex-row gap-4 md:flex-col">
                <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition">
                  <Facebook size={20} className="text-gray-700" />
                </button>

                <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition">
                  <Twitter size={20} className="text-gray-700" />
                </button>

                <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition">
                  <Instagram size={20} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Article;