// import CV from '../../assets/deepak.pdf'
import './Home.css'
import banner from '../../assets/banner-bg.png'
import hd from '../../assets/header-img.svg'
import TextChange from '../TextChange/TextChange'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {

  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 100,
      duration: 1,
      opacity: 0
    })
    gsap.from(".right-home img", {
      x: 200,
      duration: 1,
      opacity: 0
    })
    gsap.from("#contact", {
      x: -100,
      duration: 1,
      opacity: 0
    })
  })

  // const DownloadCV = (e) => {
  //   e.PreventDefault();
  // }


  return (
    <div id='home' className='relative w-full h-screen bg-black overflow-hidden'>
      <img src={banner} alt="Banner" className='absolute inset-0 w-full h-full object-cover' />

      <div className="left-home relative z-10 p-10 text-white max-w-3xl ">
        <div className="home-details">
          <div className="line1">
            <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
              <TextChange />
            </h1>
            <h2 className='text-2xl md:text-3xl font-medium text-white'>
              I am Frontend Developer
            </h2>
            <p className='text-lg md:text-xl text-gray-300'>
              This Is My Portfolio. I Am React Web Developer. This Portfolio Represents My Projects And Skills.
            </p>
          </div>
          <div className='w-full md:w-auto flex items-start justify-start mt-10 '>
            <div id="contact" className='text-3xl md:text-4xl flex flex-wrap  gap-6 md:gap-10'>
              <h2><a className='hover:text-emerald-500' href="https://github.com/"><FaGithub /></a></h2>


              <h2><a className='hover:text-emerald-500' href=""><FaLinkedin /></a></h2>
            </div>
          </div>
          {/* <a href={CV}><button onClick={() => {
            DownloadCV()
          }}>Download CV</button></a> */}
        </div>


      </div>
      <div className="right-home">
        <img src={hd} alt="" />
      </div>
    </div>
  )
}

export default Home
