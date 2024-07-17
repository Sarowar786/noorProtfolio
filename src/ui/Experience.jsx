import React, { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

export default function Experience() {
  
    const [workReactBd, setWorkReactBd] = useState(true);
    const [workGoogle, setWorkGoogle] = useState(false);
    const [workAmazon, setWorkAmazon] = useState(false);
    const [workApple, setWorkApple] = useState(false);

    const handleReactBd = ()=>{
      setWorkReactBd(true);
      setWorkGoogle(false)
      setWorkAmazon(false)
      setWorkApple(false)
    }
    const handleGoogle = ()=>{
      setWorkReactBd(false);
      setWorkGoogle(true)
      setWorkAmazon(false)
      setWorkApple(false)
    }
    const handleAmazon = ()=>{
      setWorkReactBd(false);
      setWorkGoogle(false)
      setWorkAmazon(true)
      setWorkApple(false)
    }
    const handleApple = ()=>{
      setWorkReactBd(false);
      setWorkGoogle(false)
      setWorkAmazon(false)
      setWorkApple(true)
    }



  return (
    <Container id="experience" className="max-w-screen-lg">
      <SectionTitle titleNo="02" title="Where I have Worked" />

      {/* button setup */}
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li 
            onClick={handleReactBd}
            className={`${
              workReactBd
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-designColor/20 duration-300 py-3 text-sm cursor-pointer px-4 font-medium `}
          >
            ReactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-designColor/20 duration-300 py-3 text-sm cursor-pointer px-4 font-medium `}
          >
            Google
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-designColor/20 duration-300 py-3 text-sm cursor-pointer px-4 font-medium `}
          >
            Amazon
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-designColor/20 duration-300 py-3 text-sm cursor-pointer px-4 font-medium `}
          >
            Apple
          </li>
        </ul>

        {/* content */}
        {workReactBd && <WorkCard 
                    jobTitle="Web Designer"
                    jobTag="@ReactBD"
                    date="Jan 2021 -2022"
                    detailsOne="Write modern, performant, maintaaiable code for a diverse
                    array of client and internal projects "
                    detailsTwo=" Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript, Gatsby,
                    React, Craft, WordPress, Prismic, and Netlify "
                    detailsThree=" Communicate with multi-desciplinary teams of engineer
                    designers, producers, and clients on a daily basis"/>}
        {workGoogle && <WorkCard 
                    jobTitle="Web developer"
                    jobTag="@Google.inc"
                    date="Jan 2022 -2023"
                    detailsOne="Write modern, performant, maintaaiable code for a diverse
                    array of client and internal projects "
                    detailsTwo=" Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript, Gatsby,
                    React, Craft, WordPress, Prismic, and Netlify "
                    detailsThree=" Communicate with multi-desciplinary teams of engineer
                    designers, producers, and clients on a daily basis"/>}
        {workAmazon && <WorkCard 
                    jobTitle="Mern Stack Developer"
                    jobTag="@Amazon"
                    date="Jan 2023 -present"
                    detailsOne="Write modern, performant, maintaaiable code for a diverse
                    array of client and internal projects "
                    detailsTwo=" Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript, Gatsby,
                    React, Craft, WordPress, Prismic, and Netlify "
                    detailsThree=" Communicate with multi-desciplinary teams of engineer
                    designers, producers, and clients on a daily basis"/>}
        {workApple && <WorkCard 
                    jobTitle="Software Engineer"
                    jobTag="@Apple"
                    date="Jan 2023 -present"
                    detailsOne="Write modern, performant, maintaaiable code for a diverse
                    array of client and internal projects "
                    detailsTwo=" Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as JavaScript, Gatsby,
                    React, Craft, WordPress, Prismic, and Netlify "
                    detailsThree=" Communicate with multi-desciplinary teams of engineer
                    designers, producers, and clients on a daily basis"/>}
      </div>
    </Container>
  );
}
