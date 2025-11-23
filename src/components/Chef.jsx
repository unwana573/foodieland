import chef from "../assets/chef.png"

function Chef() {
    return(
        <>
            <div className="flex flex-col md:flex-row mt-20 items-center justify-center gap-10 md:gap-20 px-4 md:px-0">

                <div className="items-center text-left max-w-md">
                    <h1 className="text-3xl font-medium">
                        Everyone can be a <br /> chef in their own kitchen
                    </h1>

                    <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br />
                        eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br />
                        ad minim 
                    </p>

                    <button 
                        type="submit" 
                        className="mt-4 bg-black text-white p-2 rounded-xl">
                        Learn more
                    </button>
                </div>

                <div className="w-full flex justify-center md:w-auto">
                    <img 
                        src={chef} 
                        alt="" 
                        className="w-64 h-64 md:w-96 md:h-96 object-cover bg-gradient-to-b from-white via-sky-50 to-sky-200 rounded-2xl"
                    />
                </div>

            </div>
        </>
    )
}

export default Chef
