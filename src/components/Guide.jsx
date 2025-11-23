import cook from "../assets/cook.png"

function Guide() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          Full Guide to Becoming a Professional Chef
        </h1>
        
        {/* Author Section */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" 
              alt="John Smith"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-8">
            <p className="font-medium text-gray-900">John Smith</p>
            <p className="text-gray-500 text-sm">15 March 2022</p>
          </div>
        </div>
        
        {/* Lorem Ipsum Text */}
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
        
        {/* Main Image */}
        <div className="w-full rounded-3xl overflow-hidden">
          <img 
            src={ cook }
            alt="Chef cooking with flames in professional kitchen"
            className="w-full h-100 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Guide;