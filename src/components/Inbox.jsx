import React, { useState } from 'react';

function Inbox() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Thanks for subscribing with: ${email}`);
      setEmail('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl">
        <div className="bg-blue-100 rounded-[3rem] p-12 md:p-16 relative overflow-hidden">

          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-48 h-48 opacity-90">
            <img 
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=300&fit=crop" 
              alt="Fresh vegetables"
              className="w-full h-full object-contain transform -rotate-12"
            />
          </div>
          
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-56 h-56">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=350&h=350&fit=crop" 
                alt="Healthy salad bowl"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>


          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Deliciousness to your inbox
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua enim ad minim
            </p>


            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto items-center justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Your email address..."
                className="flex-1 px-6 py-4 rounded-2xl border-none outline-none text-gray-700 placeholder-gray-400 shadow-sm w-full sm:w-auto min-w-[280px]"
              />
              <button
                onClick={handleSubscribe}
                className="px-10 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>


          <div className="absolute right-1/3 top-12 w-20 h-20 opacity-60 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=150&h=150&fit=crop" 
              alt="Fresh herbs"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;