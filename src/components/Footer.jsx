import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return (
        <>
            <div className='flex items-center justify-between mt-10 mb-5 text-left'>
                <div>
                    <h3 className='text-2xl'>foodieland</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuipiscing eiit,</p>
                </div>
                <div>
                    <ul className='flex gap-10'>
                        <li>Recipes</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='flex'>
                <div className='items-center'>
                    <p className='text-center mt-5'>&copy; 2020 Flowbase. Powered by Webflow.</p>
                </div>
                <ul className='hidden md:flex items-center gap-8 text-xl cursor-pointer ml-auto'>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                </ul>
            </div>
        </>
    )
}

export default Footer