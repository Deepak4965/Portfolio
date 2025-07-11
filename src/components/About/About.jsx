import deepakImg from '../../assets/Deepak.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const style = {
  backgroundColor: "#D4D4CE",
}
const About = () => {

  useGSAP(() => {
    gsap.from("#about img", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#about",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 40%"
      }
    })
    gsap.from("#head", {
      x: 200,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#about",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 40%"
      }

    })
  })

  return (
    <div style={style} id='about' className='min-h-[400px] md:min-h-[500px] mx-4 my-4 md:m-[2rem] md:mr-8 rounded-2xl p-4 gap-8 md:gap-4'>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* image section */}

          <div className="w-full h-full">
            <img
              src={deepakImg} // Replace with your image path
              alt="Profile"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          
          {/* haeding */}

          <div id='head'>
            <p className="text-xl text-gray-600 mb-4 font-medium">
              Hi! I am <span className="font-semibold text-[#287099]">Deepak</span>— a frontend web developer passionate about crafting clean, interactive, and accessible web experiences. I specialize in building responsive interfaces using React, HTML, CSS, and JavaScript.
            </p>
            <ul className=" space-y-2">
              <li className='text-[#287094]'>**Frontend Development** <br />
                - HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+), React (Hooks, Context API)</li>
              <li className='text-[#287094]'>**Tools & Technologies** <br />
                - Git & GitHub, npm/yarn, VS Code, Chrome DevTools, Responsive Design
              </li>

            </ul>
            <ul className=" space-y-2 mt-4">
              <li className='text-[#287094]'>💻 Tech Stack: React, Tailwind, JavaScript</li>
              <li className='text-[#287094]'>🎯 Interests: UI/UX Design, Open Source, Dev Tools</li>
              <li className='text-[#287094]'>📍 Location: Sihi Sector-8 ,Faridabad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
