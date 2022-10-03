import React from 'react'
import HTML from '../images/TechIcons/html.png'
import AWS from '../images/TechIcons/aws.png'
import CSS from '../images/TechIcons/css.png'
import GITHUB from '../images/TechIcons/github.png'
import JAVASCRIPT from '../images/TechIcons/javascript.png'
import TAILWIND from '../images/TechIcons/tailwind.png'
import REACT from '../images/TechIcons/react.png'
import DJANGO from '../images/TechIcons/django.png'
import PYTHON from '../images/TechIcons/python.png'
import GITLAB from '../images/TechIcons/gitlab.png'
const Skills = () => {
    
  return (
    <div id="technologies" name='skills' className='bg-[#0a192f] dark:bg-red-400 text-gray-300'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 pt-5'>Technologies</p>
            <p className='py-4
             '>These are the technologies I've worked with:</p>
        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        
            
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={REACT} alt='React icon'></img>
            <p className='my-4'>React</p>
        </div>
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={DJANGO} alt='Django icon'></img>
            <p className='my-4'>Django</p>
        </div>
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JAVASCRIPT} alt='Javascript icon'></img>
            <p className='my-4'>Javascript</p>
        </div>
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={PYTHON} alt='Python icon'></img>
            <p className='my-4'>Python</p>
        </div>
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt='AWS icon'></img>
            <p className='my-4'>AWS</p>
        </div>
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GITHUB} alt='Github icon'></img>
            <p className='my-4'>GitHub</p>
        </div>
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GITLAB} alt='GitLab icon'></img>
            <p className='my-4'>GitLab</p>
        </div>
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon'></img>
            <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon'></img>
            <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow=[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TAILWIND} alt='Tailwind icon'></img>
            <p className='my-4'>Tailwind</p>
        </div>
       
            

        </div>

    </div>
  )
}

export default Skills