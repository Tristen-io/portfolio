import React from 'react'
import '../Card.css'
const Projects = () => {
    return (
        <section id="projects" name="projects" className="h-auto">
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 pt-5'>Projects</p>
                <p className='py-4
             '>These are a few of my projects along with projects I am still developing.</p>
                <p>I am always looking to improve my skills!</p>
            </div>

            <div className="flex flex-row justify-center items-center space-x-10 m-auto w-auto h-[500px]">

                <div className="card">
                    <div className="title">
                        <h4>hi</h4>
                    </div>
                    <div className="description">
                        <h5>hi</h5>
                        <p>hi</p>
                        <div class="tech-stack">
                            <div>HI</div>
                            <div>HI</div>
                            <div>HI</div>
                            <div>HI</div>
                        </div>
                    </div>
                    <div className="corner right-top-corner"></div>
                    <div className="icon"></div>
                    <div className="corner left-bottom-corner"></div>
                    <div className="link-icon"></div>
                </div>
                <div className="card">
                    <div className="title">
                        <h4 className="font-extrabold text-white">I love you Dana :)</h4>
                    </div>
                    <div className="description">
                        <h5>Hi</h5>
                        <p>hi</p>
                        <div class="tech-stack">
                            <div>HI</div>
                            <div>HI</div>
                            <div>HI</div>
                            <div>HI</div>
                        </div>
                    </div>
                    <div className="corner right-top-corner"></div>
                    <div className="icon"></div>
                    <div className="corner left-bottom-corner"></div>
                    <div className="link-icon"></div>
                </div>
                <div className="card">
                    <div className="title">
                        <h4>hi</h4>
                    </div>
                    <div className="description">
                        <h5>hi</h5>
                        <p>hi</p>
                        <div class="tech-stack">
                            <div>HI</div>
                            <div>HI</div>
                            <div>HI</div>
                            <div>HI</div>
                        </div>
                    </div>
                    <div className="corner right-top-corner"></div>
                    <div className="icon"></div>
                    <div className="corner left-bottom-corner"></div>
                    <div className="link-icon"></div>
                </div>
            </div>
        </section>
    )
}

export default Projects