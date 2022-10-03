
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
import NavBar from './components/NavBar';
import TristenHero from './components/TristenHero';
import Card from './components/Card'
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
      <NavBar/>
      <TristenHero scrollIcons={scrollIcons}/>
      <Skills />
      <Card/>
        <section >
          {/* <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              I am currently working for Galvanize as a Software Engineer Immersive Resident.
              I help and teach students programing fundamentals. I am seeking for a full time
              position as this contract ends in Feb 2023.
            </p>
          </div> */}
          

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
              <a href="https://www.linkedin.com/in/tristen-io" target="_blank" rel="noreferrer" className="flex items-center">
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

      


    </>
  );
}

export default App;
