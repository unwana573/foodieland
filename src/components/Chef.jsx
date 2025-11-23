import chef from "../assets/chef.png"

function Chef() {
    return(
        <>
            <div className="flex mt-20 items-center justify-center gap-20">
                <div className="items-center text-left">
                    <h1 className=" text-3xl font-medium">
                        Everyone can be a <br /> chef in their own kitchen
                    </h1>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br />
                        eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br />
                        ad minim 
                    </p>
                    <button type="submit" className="text-left bg-black text-white p-2 rounded-xl">Learn more</button>
                </div>
                <div>
                    <img src={chef} alt="" className="w-150 h-100 object-cover bg-gradient-to-b from-white via-sky-50 to-sky-200 rounded-2xl"/>
                </div>
            </div>
        </>
    )
}

export default Chef