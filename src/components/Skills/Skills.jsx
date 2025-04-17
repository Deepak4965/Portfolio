import React from 'react';
import Card from '../Card/Card';
import './Skill.css';
import './SkillResponsive.css';
import frontend from '../../assets/Frontend.png';
import react from '../../assets/React.png';
import Tailwind from '../../assets/Tailwind.png';

const Skills = () => {
  return (
    <div id="Skills" className="px-4 py-10 sm:px-8 md:px-16 lg:px-24 cursor-pointer">
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center"id='para'>
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20 sm:gap-20 md:gap-120 justifybetween items-center">
        <Card className="Frontend" image={frontend} />
        <Card className="React" image={react} />
        <Card className="Tailwind" image={Tailwind} />
      </div>
    </div>
  );
};

export default Skills;
