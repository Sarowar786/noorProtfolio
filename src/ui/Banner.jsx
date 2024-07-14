import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export default function Banner() {
  const stringArray =['I Build things for the web','Passionate Web Developer', 'MERN Stack Developer', 'Love to learn new Ideas']

  return (
    <Container
      id="home"
      className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3
        initial={{y:-10 ,opacity:0 }} animate={{y:0,opacity:1}} 
        transition={{duration:0.1 , delay:.7}}
       className="text-lg text-designColor font-semibold tracking-wider">
        Hi,My name is
      </motion.h3>
      <motion.h1 
      initial={{y:-10 ,opacity:0 }} 
      animate={{y:0,opacity:1}} 
      transition={{duration:0.1 , delay:.8}}
      className="text-4xl lg:text-6xl font-bold flex
      flex-col ">Md Golam Sarowar.
      <span className="font-semibold text-darkText mt-2 lg:mt-4">
        <Typewriter options={{
          strings:stringArray,
          autoStart:true,
          loop:true,
        }} />
      </span>
      </motion.h1>
      <motion.p initial={{y:-10 ,opacity:0 }} 
      animate={{y:0,opacity:1}} 
      transition={{duration:0.1 , delay:.9}}
      className="md:max-w-[650px] text-darkText font-medium leading-7 ">
        I am a web developer with 2+ years of experience in React. I have a strong foundation in front-end & i also learn back-end development.I am skilled in creating user-friendly and responsive web applications using React and its ecosystem.{' '}
        <a href="#" >
          <span className="text-designColor h-7 relative overflow-x-hidden inline-flex group cursor-pointer">
            Learn more
          <span className="w-full h-[1px] bg-designColor  absolute bottom-0 left-0 -translate-x-[110%] transition-transform group-hover:translate-x-0 duration-500  " />
          </span>
        </a>
      </motion.p>
      <motion.a 
       initial={{y:-10 ,opacity:0 }} 
       animate={{y:0,opacity:1}} 
       transition={{duration:0.1 , delay:1}}
      
      href="https://github.com/Sarowar786" 
      
        target="_blank"
        className="h-14 w-52 border rounded-md border-designColor text-designColor hover:bg-hoverColor tracking-wide flex items-center justify-center duration-500 "
      >
        Check out my project!
      </motion.a>
    </Container>
  );
}
