import { NavLink } from "react-router-dom";
import { IoLogoApple } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="">
            <ul className="hidden  w-[996px] mx-auto md:flex justify-center items-center py-3 gap-6">
                <li><NavLink to='/'><IoLogoApple size={25}></IoLogoApple></NavLink></li>
                <li><NavLink to='/'><p>Store</p></NavLink></li>
                <li><NavLink to='/'><p>Mac</p></NavLink></li>
                <li><NavLink to='/'><p>iPad</p></NavLink></li>
                <li><NavLink to='/'><p>iPhone</p></NavLink></li>
                <li><NavLink to='/'><p>Watch</p></NavLink></li>
                <li><NavLink to='/'><p>Vision</p></NavLink></li>
                <li><NavLink to='/'><p>AirPods</p></NavLink></li>
                <li><NavLink to='/'><p>TV & Home</p></NavLink></li>
                <li><NavLink to='/'><p>Entertainment</p></NavLink></li>
                <li><NavLink to='/'><p>Accessories</p></NavLink></li>
                <li><NavLink to='/'><p>Support</p></NavLink></li>
                <li><NavLink to='/'><button><IoSearchOutline size={20}></IoSearchOutline></button></NavLink></li>
                <li><NavLink to='/'><button><IoBagOutline size={20}></IoBagOutline></button></NavLink></li>
            </ul>
            <div className="section2 flex justify-center text-white  py-5">
                <h1 className="flex gap-5 ">Join the Earth Day by recycling your Apple devices. <a href="#" className="flex items-center gap-2 text-blue-400">Recycle for free <MdOutlineKeyboardArrowRight size={20}></MdOutlineKeyboardArrowRight></a></h1>
            </div>
        </div>
    );
};

export default Navbar;