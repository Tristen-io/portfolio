
import './App.css';
import 'animate.css';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai'
import Resume from './images/Resume.pdf'
import TristenSelfie from './images/Selfie1.png'
import ReactGa from 'react-ga'
import { useEffect, useState } from "react";
import DevelopedBy from './components/DevelopedBy'
import Switcher from "./components/Switcher";
import Skills from './components/Skills';
// import { renderButton, checkSignedIn } from "./utils";


function App() {

  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_ID) // GA tracking ID
    // to report page view non interaction
    ReactGa.pageview(window.location.pathname)
  }, [])

  const [navColor, setNavColor] = useState(false)
  const [scrollIcons, setScrollIcons] = useState(false)

  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setNavColor(true)
      setScrollIcons(true)
    } else {
      setNavColor(false)
      setScrollIcons(false)
    }
  }
  const loadScrollIcons = () => {
    if (window.scrollY >= 130) {
      setScrollIcons(true)
    } else {
      setScrollIcons(false)
    }
  }
  
  window.addEventListener('scroll', changeNavColor, loadScrollIcons)


  return (
    <>
    <nav className={`fixed shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center backdrop-filter backdrop-blur-lg`}>
            <h1 className="text-xl dark:text-white">developed by: <DevelopedBy /></h1>
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
      <div className="bg-white dark:bg-gray-800 pt-20">
        <section className="min-h-screen">
          

          <div className="text-center">
            <h2 className="text-5xl py-2 text-teal-600  dark:text-teal-600 font-medium">
              Tristen Martinez
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
          { scrollIcons ? 
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/tristen-martinez-io/" rel="noreferrer" target="_blank" className="animate__animated animate__fadeInLeftBig hover:text-teal-500 dark:text-white dark:hover:text-teal-500"> <AiFillLinkedin /> </a>
            <a href="https://github.com/Tristen-io" rel="noreferrer" target="_blank" className="animate__animated animate__fadeIn animate__delay-1s hover:text-teal-500  dark:text-white dark:hover:text-teal-500"> <AiFillGithub /> </a>
            <a href="https://gitlab.com/tristen.martinez" rel="noreferrer" target="_blank" className="animate__animated animate__fadeInRightBig hover:text-teal-500  dark:text-white dark:hover:text-teal-500"> <AiFillGitlab /> </a>
          </div>
          :
          <div></div>
        }
         
          
        </section>

        <section >
          {/* <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              I am currently working for Galvanize as a Software Engineer Immersive Resident.
              I help and teach students programing fundamentals. I am seeking for a full time
              position as this contract ends in Feb 2023.
            </p>
          </div> */}
          <Skills />

        </section>

        {/* <div className="w-full md:w-1/2 lg:w-2/6">
          <div className="bg-red-400 dark:bg-black m-4 rounded-lg shadow-2xl">
            <img src={"https://picsum.photos/seed/picsum/800/260"} alt="Post" className="rounded-t-lg"></img>
            <div className="px-4 pt-2">
              <h1 className="font-bold mt-2 text-2xl text-gray-800 dark:text-gray-300">UX Better Solutions</h1>
              <h3 className="text-gray-500 dark:text-gray-300"> Dark & Light mode with React & Tailwind</h3>
              <p className="text-gray-400 dark:text-gray-400 my-4"> Development of dark and light theme mode using React and Tailwind. Also savcing the current thme in LocalStorage. The current theme mode is pulled when the page is refreshed. Let's try!</p>


            </div>
            <div className="px-4 pb-2">
              <a href="https://www.linkedin.com/in/tristen-io" targer="_blank" rel="noreferrer" className="flex items-center">
                <img src={"https://picsum.photos/seed/picsum/200/300"} width="32" alt="Avatar" className="rounded-full"></img>
                <div className="ml-2">
                  <p className="text-gray-500 dark:text-gray-300 text-sm">Tristen Martinez</p>
                </div>
              </a>

            </div>
            <div className="p-4">
              <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">#react</span>
              <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">#tailwind</span>
              <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">#darkmode</span>

            </div>
          </div>
        </div> */}

      </div>


    </>
  );
}

export default App;
