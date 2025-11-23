import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return (
        <>

            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10 mb-5 text-left px-4'>

                <div>
                    <h3 className='text-2xl'>foodieland</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuipiscing eiit,</p>
                </div>

                <div>
                    <ul className='flex flex-wrap md:flex-nowrap gap-6 md:gap-10'>
                        <li>Recipes</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className='flex flex-col md:flex-row items-center justify-between mt-5 px-4'>

                <p className='text-center mt-3 md:mt-0'>&copy; 2020 Flowbase. Powered by Webflow.</p>

                <ul className='flex items-center gap-8 text-xl cursor-pointer mt-4 md:mt-0'>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                </ul>
            </div>
        </>
    )
}

export default Footer
