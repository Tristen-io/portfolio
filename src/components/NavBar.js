import React from 'react'
import DevelopedBy from '../components/DevelopedBy'
import Switcher from "../components/Switcher";
import Resume from '../images/Resume.pdf'
const NavBar = () => {
    return (
        <nav className={`fixed shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center backdrop-filter backdrop-blur-lg`}>
            <h1 className="text-xl dark:text-white">developed by: <span><DevelopedBy /></span></h1>
            <ul className="flex items-center space-x-4">
                <li className="cursor-pointer text-xl">
                    <a href={Resume} target="_blank" rel="noreferrer" className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                        RESUME
                    </a>
                </li>
                <li>
                    <div className="">
                        <Switcher />
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar