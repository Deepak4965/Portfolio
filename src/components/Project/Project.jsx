import React from 'react'
import em from '../../assets/em.png'
import ems from '../../assets/ems.png'
import Img from '../../assets/Img-enhance.jpg'
import { FaShareSquare } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import './Project.css'
const projects=[
   
  {
        id:1,
        name:"Image Enhanced",
        description:"",
        technologies:"React , Tailwind, API",
        image:Img,
        github:"",
        demo:""
    },
    {
        id:2,
        name:"Employees Management System",
        description:"",
        technologies:"React , Tailwind",
        image:ems,
        github:"https://github.com/Deepak4965/Ems",
        demo:"deepak-ems.netlify.app"
    },
    {
        id:3,
        name:"Ecommerce",
        technologies:"Redux, React",
        image:em,
        github:"https://github.com/Deepak4965/Ecommerce",
        demo:"https://deepak-coder-e-commerce.netlify.app/"
    },
    {
        id:4,
        name:"Food Delievery",
        technologies:"React , Tailwind",
        image:em,
        github:"",
        demo:""
    },
]

const Project = () => {
  return (
    <div className='bg- text-white py-20' id='project'>
        <div className='container mx-auto px-4 sm:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12 'id='para'>Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
{projects.map(Project=>(
    <div key={Project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105' id='pro'>
        <img src={Project.image} alt={Project.name} className='rounded-lg mb-4 w-full h-48 object-cover' />
        <h3 className='text-2xl font-bold mb-2'>{Project.name}</h3>
        <p className='text-gray-3 font-semibold00 mb-4'>{Project.technologies}</p>
        <div className='mt-2 p-2 md:p-4 flex gap-5 md:gap-15 '>
        <a href={Project.github} className='border-2 border-purple-500 text-purple-500 px-4 py-2 hover:bg-purple-500 hover:text-white transition
        rounded-full' target='_blank' rel='noopener noreferrer'><SiGithub /></a>
         <a href={Project.demo} className='border-2 border-purple-500 text-purple-500 px-4 py-2 hover:bg-purple-500 hover:text-white transition
        rounded-full' target='_blank' rel='noopener noreferrer'><FaShareSquare /></a>
        </div>
    </div>
))}
            </div>
        </div>
      
    </div>
  )
}

export default Project
