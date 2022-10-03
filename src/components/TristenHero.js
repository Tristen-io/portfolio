import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai'
import TristenSelfie from '../images/Selfie1.png'
import DevelopedBy from '../components/DevelopedBy'
const TristenHero = ({scrollIcons}) => {
    return (
        <div id="home" className="bg-white dark:bg-gray-800 pt-20">
            <section className="min-h-auto">
                <div className="text-center">
                    <h2 className="text-5xl sm:text-3xl py-2 dark:text-white font-medium">
                        Developed By: <span className="text-teal-600  dark:text-teal-600"><DevelopedBy/></span>
                    </h2>
                    <h3 className="text-2xl py-2 dark:text-white ">
                        Full Stack Software Engineer
                    </h3>
                    <p className="text-medium py-5 leading-8 text-gray-800 dark:text-white ">
                        Enthusiastic engineer and avid rock climber! Looking for a full time position in full stack development.
                    </p>
                </div>
                <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
                    <img src={TristenSelfie} className="" alt="Selfie"></img>
                </div>
                {scrollIcons ?
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                        <a href="https://www.linkedin.com/in/tristen-martinez-io/" rel="noreferrer" target="_blank" className="animate__animated animate__fadeInLeftBig hover:text-teal-500 dark:text-white dark:hover:text-teal-500">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://github.com/Tristen-io" rel="noreferrer" target="_blank" className="animate__animated animate__fadeIn animate__delay-1s hover:text-teal-500  dark:text-white dark:hover:text-teal-500">
                            <AiFillGithub />
                        </a>
                        <a href="https://gitlab.com/tristen.martinez" rel="noreferrer" target="_blank" className="animate__animated animate__fadeInRightBig hover:text-teal-500  dark:text-white dark:hover:text-teal-500">
                            <AiFillGitlab />
                        </a>
                    </div>
                    :
                    <div className="py-10"></div>
                }


            </section>
        </div>
    )
}

export default TristenHero