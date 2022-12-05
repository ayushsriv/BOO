import { useState } from "react"

import { close, menu} from '../assets'
import { navLinks} from '../constants'
import {resume} from '../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <h1 className="text-3xl font-poppins text-white"> Ayush Srivastava </h1>
        <ul className="list-none sm:flex hidden 
        justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-normal
                    cursor-pointer text-[16px] mr-10
                    text-white`}
                >
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
            <li className={`font-poppins font-normal
                    cursor-pointer text-[16px] mr-0
                    text-white`}>
                <a href={resume} rel="noopener noreferrer" target="_blank">
                    Resume
                </a>        
            </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
            />

            <div 
                className={`${toggle ? 'flex' : 'hidden'}
                p-6 absolute top-20 
                right-0 mx-4 my-2 min-w-[140px] rounded-xl
                sidebar`}>
                <ul className="list-none flex flex-col
                    justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal
                            cursor-pointer text-[16px] mb-4
                            text-white`}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                    <li className={`font-poppins font-normal
                        cursor-pointer text-[16px] mb-0
                        text-white`}>
                        <a href={resume} rel="noopener noreferrer" target="_blank">
                            Resume
                        </a>        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar