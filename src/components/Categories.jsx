import meat from "../assets/meat.png"
import vegan from "../assets/vegan.png"
import lunch from "../assets/lunch.png"
import choco from "../assets/choco.png"
import dessert from "../assets/dessert.png"
import breakfast from "../assets/breakfast.png"

function Categories() {
    return (
        <>
            <div className="mt-20 px-4">
                

                <div className="flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-3xl font-semibold mb-3 md:mb-0">Categories</h1>

                    <button className="bg-blue-100 text-sm rounded-xl px-4 py-2 cursor-pointer">
                        View All Categories
                    </button>
                </div>


                <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-8">
                    <img src={breakfast} alt="Breakfast" className="w-20 md:w-24 cursor-pointer" />
                    <img src={vegan} alt="Vegan" className="w-20 md:w-24 cursor-pointer" />
                    <img src={meat} alt="Meat" className="w-20 md:w-24 cursor-pointer" />
                    <img src={dessert} alt="Dessert" className="w-20 md:w-24 cursor-pointer" />
                    <img src={lunch} alt="Lunch" className="w-20 md:w-24 cursor-pointer" />
                    <img src={choco} alt="Chocolate" className="w-20 md:w-24 cursor-pointer" />
                </div>

            </div>
        </>
    );
}

export default Categories;
