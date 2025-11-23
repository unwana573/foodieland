import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faArrowRightFromBracket, faScroll, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero from "../assets/pix.jpg"

function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full h-[500px] rounded-[40px] overflow-hidden mt-10">


      <div className="flex-1 bg-[#E5F7FD] p-10 flex flex-col justify-center">

        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow w-40">
          <FontAwesomeIcon className="color-yellow-700" icon={faScroll} />
          <p className="text-sm font-semibold">Hot Recipes</p>
        </div>

        <h1 className="text-3xl md:text-5xl font-medium mt-5 leading-tight text-left">
          Spicy delicious <br /> chicken wings
        </h1>

        <p className="text-gray-600 mt-4 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex items-center gap-6 mt-6 text-gray-700">

          <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-2xl">
            <FontAwesomeIcon icon={faClock} />
            <p className="text-sm">30 Minutes</p>
          </div>

          <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-2xl">
            <FontAwesomeIcon icon={faUtensils} />
            <p className="text-sm">Chicken</p>
          </div>

        </div>

        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-bold">John Smith</p>
              <p className="text-sm text-gray-600">15 March 2022</p>
            </div>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-900">
            View Recipes
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
        </div>

      </div>

      <div className="flex-1 h-full">
        <img 
          src={hero}
          alt="food"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
