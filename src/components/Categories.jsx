import meat from "../assets/meat.png"
import vegan from "../assets/vegan.png"
import lunch from "../assets/lunch.png"
import choco from "../assets/choco.png"
import dessert from "../assets/dessert.png"
import breakfast from "../assets/breakfast.png"

function Categories() {
    return(
        <>
            <div className="mt-20">
                <ul className="flex justify-around">
                    <li className="text-3xl font-semibold">Categories</li>
                    <li className="bg-blue-100 text-sm rounded-xl items-center w-40 p-2 cursor-pointer">View All Categories</li>
                </ul>
                <ul className="flex justify-around mt-5 gap-10">
                    <img src={breakfast} alt="" />
                    <img src={vegan} alt="" />
                    <img src={meat} alt="" />
                    <img src={dessert} alt="" />
                    <img src={lunch} alt="" />
                    <img src={choco} alt="" />
                </ul>
            </div>
        </>
    )
}

export default Categories;