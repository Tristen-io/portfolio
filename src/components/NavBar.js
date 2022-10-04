import React, { useEffect, useState } from 'react'
import Switcher from "../components/Switcher";
import Resume from '../images/Resume.pdf'
import { FaLaptopCode } from 'react-icons/fa'
const NavBar = () => {

    const [btn, setBtn] = useState(undefined)
    const [menu, setMenu] = useState(undefined)
    
    useEffect(() => {
        if (btn && menu) {
            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden")
            });
        } else {
            return (
                setBtn(document.querySelector("button.mobile-menu-button")),
                setMenu(document.querySelector(".mobile-menu"))

            )

        }
    }, [btn, menu])
    let audio = new Audio("/NightVision.mp3")



    const startNightVisionSound = () => {
        audio.play()
    }
    // play sound on click for night mode
    return (
        <div className="fixed w-full z-40 backdrop-filter backdrop-blur-lg">

            <nav className="shadow-lg">
                <div className="px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                {/* logo */}
                                <a href="#home" className="flex items-center py-4 px-2">
                                    <FaLaptopCode className="h-8 w-8 mr-2 dark:text-white" />
                                    <span className="font-semibold text-gray-500 text-lg dark:text-white">Portfolio</span>
                                </a>
                            </div>
                            {/* primary items */}
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="#home" className="py-4 px-2 text-green-500 font-semibold ">Home</a>
                                <a href="#projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 dark:text-white">Projects</a>
                                <a href="#technologies" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 dark:text-white">Technologies</a>
                            </div>
                        </div>
                        {/* secondary items */}
                        <div className="hidden md:flex items-center space-x-3 ">
                            <ul className="flex items-center space-x-4">
                                <li className="cursor-pointer text-xl">
                                    <a href={Resume} target="_blank" rel="noreferrer" className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                                        RESUME
                                    </a>
                                </li>
                                <li>
                                    <div className="" onClick={startNightVisionSound}>
                                        <Switcher />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* mobile menu button */}
                        <div className="md:hidden flex space-x-3 items-center">
                            <div className="" onClick={startNightVisionSound}>
                                <Switcher />
                            </div>
                            <button className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile */}
                <div className="hidden mobile-menu">
                    <ul className="">
                        <li className="active"><a href="#home" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                        <li><a href="#projects" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Projects</a></li>
                        <li><a href="#technologies" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Technologies</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar