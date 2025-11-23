import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X,  } from "lucide-react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full top-0 left-0">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-600">
            Foodieland
        </Link>


        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-600">Home</Link></li>
            <li><Link to="/Recipies" className="hover:text-600">Recipies</Link></li>
            <li><Link to="/blog" className="hover:text-600">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-600">Contact</Link></li>
            <li><Link to="/About_us" className="hover:text-600">About us</Link></li>
        </ul>

        <ul className="hidden md:flex items-center gap-8 text-2xl cursor-pointer">
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
        </ul>

        <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
        >
            {open ? <X size={28} /> : <Menu size={28} />}
        </button>
    </div>

    {open && (
        <ul className="md:hidden bg-white w-full px-6 py-4 flex flex-col gap-4 shadow-md text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-600">Home</Link></li>
            <li><Link to="/Recipies" className="hover:text-600">Recipies</Link></li>
            <li><Link to="/blog" className="hover:text-600">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-600">Contact</Link></li>
            <li><Link to="/About_us" className="hover:text-600">About us</Link></li>
        </ul>
    )}
    </nav>
);
}
