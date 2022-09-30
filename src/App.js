import { Link } from "react-router-dom";
import './App.css';
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai'
import Resume from './images/Resume.pdf'
import TristenSelfie from './images/Selfie1.png'
import ReactGa from 'react-ga'
import { useEffect } from "react";
import DevelopedBy from './components/DevelopedBy'
function App() {
  
  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_ID) // GA tracking ID
    // to report page view non interaction
    ReactGa.pageview(window.location.pathname)
  }, [])

  return (
    <>
      <div className="bg-white px-10 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">developed by: <DevelopedBy/></h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="text-2xl" /></li>
              <li className="cursor-pointer text-xl">
                <a href={Resume} target="_blank" className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"> RESUME </a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Tristen Martinez
            </h2>
            <h3 className="text-2xl py-2">
              Full Stack Software Engineer
            </h3>
            <p className="text-medium py-5 leading-8 text-gray-800">
              Enthusiastic engineer and Avid rock climber! Looking for a full time position in full stack development. 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <Link > <AiFillLinkedin  /> </Link>
            <Link > <AiFillGithub  /> </Link>
            <Link > <AiFillGitlab  /> </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <img src={TristenSelfie} className=""></img>
          </div>
        </section>

        <section >
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              I am currently working for Galvanize as a Software Engineer Immersive Resident.
              I help and teach students programing fundamentals. I am seeking for a full time 
              position as this contract ends in Feb 2023. 
            </p>
          </div>
          <div>
            <div>
              
            </div>
          </div>

        </section>

      </div>

    </>
  );
}

export default App;
