"use client";
import React, { useState } from 'react';
import {
SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiReact,
  SiCplusplus, SiPython, SiMysql, SiDart,
  SiFigma, SiAdobephotoshop, SiAdobeillustrator, 
  SiFacebook, SiInstagram, SiGithub, SiLinkedin,
} 
from 'react-icons/si';
import Navbar from './components/navbar';
import Footer from './components/footer';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Tech stack data
const techStack = [
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Dart', icon: <SiDart /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop /> },
  { name: 'Illustrator', icon: <SiAdobeillustrator /> }
];


  // Split tech stack into two rows
  const firstRow = techStack.slice(0, 6);
  const secondRow = techStack.slice(7, 12);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Vertical Universe - A Scrollable Journey Through Space",
      description: "Vertical Universe is a fun, scrollable website that lets you explore the universe from the ground all the way to the farthest parts of space. As you scroll up, you'll pass through different layers—like airplanes, planets, stars, and galaxies—until you reach the edge of the observable universe. It’s designed to help people see just how massive space really is, with real examples placed at their actual distances.",
      image: "vertical-universe.png",
      link: "https://vertical-universe.netlify.app/",
      featured: true
    },
    {
      id: 2,
      title: "Barbell Velocity Tracker - A Thesis Project",
      description: "A mobile app that uses computer vision to track barbell movement during lifts. It analyzes videos to calculate mean and peak velocity, then gives feedback on load intensity (light, moderate, heavy). Built with Flutter and YOLOv8, it aims to make performance tracking easier and more affordable for gym users. Still in development.",
      image: "barvel.png",
      link: "https://github.com/jptaycs/SP1-main.git",
    },
    {
      id: 3,
      title: "Ateneo de Naga University ICTC - A Training Center System Website",
      description: "A web-based platform for managing ICTC training programs. It allows users to register, access materials, and track progress, while admins manage schedules and users. The system is responsive and uses a secure database. The website is not deployed as it was an unfinished internship project.",
      image: "ictc.png",
      link: "https://github.com/jptaycs/ICTC_Website.git"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-19 pb-0 px-0">
        <div className="max-w-2xl mx-auto text-left ">
          <div className="bg-black border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-left space-x-39">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Jerome Patrick Tayco
            </h1>
            <div className="flex space-x-5 text-gray-200">
              <a
                href="https://www.linkedin.com/in/jerome-patrick-r-tayco-442873264/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-100 transition-colors duration-300"
              >
                <SiLinkedin size={32} />
              </a>
              <a
                href="https://github.com/jptaycs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                <SiGithub size={32} />
              </a>
            </div>
          </div>
          <p className="text-base md:text-xl text-gray-200 mt-2 mb-0">
            Software Engineer & UI/UX Designer based in PH
          </p>
          </div>        

          {/* Tech Stack Section */}
          <h2 className="text-xl md:text-2xl font-bold mb-6 mt-10">What I Work With?</h2>
           {/* First Row - Left to Right */}
            <div className="relative overflow-hidden">
              {/* Left Gradient */}
              <div className="absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              {/* Right Gradient */}
              <div className="absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
              <div className="flex animate-scroll-left space-x-0 w-max">
                {[...firstRow, ...firstRow].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-800 px-6 py-4 rounded-medium whitespace-nowrap">
                    <span className="text-3xl md:text-1xl text-white-900">{tech.icon}</span>
                    <span className="text-base md:text-lg font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="relative overflow-hidden">
              {/* Left Gradient */}
              <div className="absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              {/* Right Gradient */}
              <div className="absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
              <div className="flex animate-scroll-right space-x-0 w-max">
                {[...secondRow, ...secondRow].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-800 px-6 py-4 rounded-medium whitespace-nowrap">
                    <span className="text-3xl md:text-1xl text-white-900">{tech.icon}</span>
                    <span className="text-base md:text-lg font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-left">Projects</h2>
          
          <div className="space-y-16">
            {projects.map((project) => (
              <div key={project.id} className="group">
                {project.featured ? (
                  // Featured Project Layout
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6 text-sm md:text-base">{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative overflow-hidden rounded-lg bg-gray-900 aspect-video mx-auto group-hover:scale-105 transition-transform duration-300"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        </div>
                      </a>
                  </div>
                ) : (
                  // Regular Project Layout
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6 text-sm md:text-base">{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative overflow-hidden rounded-lg bg-gray-900 aspect-video mx-auto group-hover:scale-105 transition-transform duration-300"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        </div>
                      </a>
                  </div>
                )}
              </div>
            ))}
          </div>
               <Footer />
          
        </div>
      </section>

      <style jsx>{`
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;