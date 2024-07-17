import React from "react";
import logo from "../assets/Images/logoN.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion"

export default function Header() {
  const navigation = [
    { title: "home", link: "home", value: "" },
    { title: "about", link: "about", value: "01", delay: "0.1" },
    { title: "experience", link: "experience", value: "02", delay: "0.2" },
    { title: "project", link: "project", value: "03", delay: "0.3" },
    { title: "contact", link: "contact", value: "04", delay: "0.4" },
  ];

  return (
    <header className="h-20 shadow-lg shadow-designColor/20 px-4 lg:px-0 items-center flex sticky top-0 z-50 bg-primaryColor">
      <div className="w-[1440px] mx-auto items-center flex justify-between">
        <div>
          <img
            src={logo}
            alt="logo "
            className="w-full h-64 opacity-75 rounded-lg hover:opacity-100 hover:cursor-pointer duration-300 "
          />
        </div>

        <div className=" hidden md:inline-flex gap-7 items-center">
          <div className="flex gap-7 text-[13px] ">
            {navigation?.map((menu) => (
              <Link 
                key={menu?.title}
                to={menu?.link}
                duration={500}
                smooth={true}
                offset={-80}
              >
                <motion.p initial={{y:-10 ,opacity:0 }} animate={{y:0,opacity:1}} 
                 transition={{duration:0.1 , delay:menu?.delay}} >
                    <span className="text-designColor mr-1 ">{menu?.value} {menu?.value && '.'} </span>
                    <span className="uppercase tracking-wide font-medium hover:text-designColor duration-300 cursor-pointer ">{menu?.title}</span>
                </motion.p>
              </Link>
            ))}
          </div>
          <motion.a 
            initial={{opacity:0 }} 
            animate={{opacity:1}} 
            transition={{delay:0.5}}
            
            href='#' target="blank" className="text-[13px] uppercase font-medium rounded-md text-designColor border border-designColor tracking-wider px-4 py-2 hover:bg-hoverColor duration-300 cursor-pointer  ">
            resume
          </motion.a>
        </div>
      </div>
    </header>
  );
}
