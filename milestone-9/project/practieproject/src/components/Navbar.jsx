import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";
import Mylink from "./Mylink";
// import MyContainer from "./MyContainer";
// import MyLink from "./MyLink";

const Navbar = () => {
    return (
        <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
            {/* <MyContainer className="flex items-center justify-between"> */}
            <MyContainer className='flex justify-between'>
                <figure>
                    <img src={logo} className="w-[55px]" />
                </figure>
                <nav>
                    <ul className="flex items-center gap-2 mt-3">
                        <li>
                            <Mylink to={"/"}>Home</Mylink>
                            {/* <NavLink to='/' className={({isActive})=>isActive ? 'text-pink-500 bg-sky-400 rounded p-2': ''} >Home</NavLink> */}
                        </li>
                        <li>
                            <Mylink to={"/about-us"}>About Us</Mylink>
                            {/* <NavLink to='/about-us' className={({isActive})=>isActive ? 'text-pink-500 bg-sky-400 rounded p-2': ''} >About Us</NavLink> */}
                        </li>
                        <li>
                            <Mylink to={"/profile"}>Profile</Mylink>
                            {/* <NavLink to='/profile' className={({isActive})=>isActive ? 'text-pink-500 bg-sky-400 rounded p-2': ''} >Profile</NavLink> */}
                        </li>
                        {/* <li><MyLink to={"/"}>Home</MyLink></li>
                        <li><MyLink to={"/about-us"}>About US</MyLink></li>
                        <li><MyLink to={"/profile"}>Profile</MyLink></li> */}
                    </ul>
                </nav>

                <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                    <Link to={"/signin"}>Sign in</Link>
                </button>
            </MyContainer>
            {/* </MyContainer> */}
        </div>
    );
};

export default Navbar;