
import Card from '../Card/Card';
import './Skill.css';
import './SkillResponsive.css';
import frontend from '../../assets/Frontend.png';
import react from '../../assets/React.png';
import Tailwind from '../../assets/Tailwind.png';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Skills = () => {

// Animation

  useGSAP(()=>{
    gsap.from("#heading",{
            y:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:"#heading",
                scroll:"body",
                scrub:2,
                 
                start:"top 80%",
                end:"top 30%"
            }
        })
         gsap.from("#slider",{
            y:100,
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:"#slider",
                scroll:"body",
                scrub:2,
                start:"top 80%",
                end:"top 30%"
            }
        })
  })
  return (
    <div id="Skills" className="px-4 py-10 sm:px-8 md:px-16 lg:px-24 cursor-pointer">
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center"id='heading'>
        Skills
      </h1>

      {/* card section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      py-5 lg:grid-cols-5 gap-20 sm:gap-20 md:gap-120 justify-between items-center  md:mt-[-15px] " id='title'>
        <Card title='HTML CSS JS' image={frontend} />
        <Card title='React'  image={react}/>
        <Card title='Tailwind Css' image={Tailwind} />

       
      </div>
    </div>
  );
};

export default Skills;
