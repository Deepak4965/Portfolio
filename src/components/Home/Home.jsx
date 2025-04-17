import React from 'react'
import './Home.css'
import banner from '../../assets/banner-bg.png'
import hd from '../../assets/header-img.svg'

import TextChange from '../TextChange/TextChange'
const Home = () => {
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
            I'm Frontend Developer
          </h2>
          <p className='text-lg md:text-xl text-gray-300'>
          This Is My Portfolio. I Am React Web Developer. This Portfolio Represents My Projects And Skills.
          </p>
          </div>
          
           {/* <button>Hier me</button> */}
        </div>
       

      </div>
      <div className="right-home">
        <img src={hd} alt="" />
      </div>
    </div>
  )
}

export default Home
