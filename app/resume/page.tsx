"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ResumePage = () => {
  const experiences = [
    {
      title: "Software Developer & UI/UX Designer",
      company: "Ateneo de Naga University ICTC",
      year: "2024",
      details: [
        "Continued and enhanced development of the Ateneo Information and Communications Technology Center Web Application, building on the foundation laid by the previous intern.",
        "Redesigned the UI/UX for improved user elements and fixed layout and button errors.",
        "The intern experience taught me to be productive, committed, collaborative, and adaptable in a real-world development environment, while continuously improving my technical and communication skills."
      ]
    },
    {
      title: "Computer Repair Technician",
      company: "Camarines Sur",
      year: "2022",
      details: [
        "Diagnosed and repaired hardware and software issues for desktops.",
        "Installed operating systems, drivers, and essential applications.",
        "Upgraded hardware components such as RAM, hard drives, and power supplies.",
        "Provided technical support and maintenance for clients.",
        "This experience strengthened my troubleshooting abilities, customer service skills, and overall technical confidence by working directly with a wide range of hardware and software challenges in real-world environments."
      ]
    }
  ];

  const skills = [
    {
      category: "Programming",
      description: "Proficient in C++, Python, and Java with OOP fundamentals"
    },
    {
      category: "Web Development",
      description: "Knowledgeable in HTML, CSS, and JavaScript for building responsive and interactive websites"
    },
    {
      category: "Mobile Development",
      description: "Skilled in Dart and Flutter for developing cross-platform mobile applications with user-friendly interfaces"
    },
    {
      category: "UI/UX Design",
      description: "Proficient in Figma for wireframing, designing, and prototyping intuitive user interfaces"
    },
    {
      category: "Figma (Advanced Use)",
      description: "Experience with auto-layouts, components, interactive prototypes, and collaborative design workflows"
    },
    {
      category: "Adobe Photoshop",
      description: "Capable of editing images, logos, creating UI mockups, and preparing visual assets for web and mobile platforms"
    },
    {
      category: "Adobe Illustrator",
      description: "Skilled in designing vector graphics and game assets such as GIF, icons, characters, and environment elements"
    }
  ];

  const education = [
    {
      school: "Ateneo de Naga University",
      degree: "Bachelor of Science in Computer Science",
      year: "2021 - 2025"
    },
    {
      school: "Ateneo de Naga University SHS",
      degree: "Senior High School | STEM",
      year: "2019 - 2021"
    },
    {
      school: "Lyceo de Pasacao",
      degree: "Junior High School",
      year: "2015 - 2019"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-20 px-6 md:px-26 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">A hunger to learn.</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Motivated and adaptable Computer Science student, aiming to apply skills in 
            Software Development and Graphic Design to improve systems' effectiveness 
            and efficiency. Eager to learn, grow, and contribute as a full-time developer or 
            designer.
          </p>
          
            <a href="/resume.pdf" download>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors">
                Download Resume
              </button>
            </a>

        </div>

        {/* Experiences Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experiences</h2>
          
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-700 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 md:text-right mt-2 md:mt-0">{exp.year}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-white mr-3 mt-2">•</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="border-l-2 border-gray-700 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">{skill.category}</h3>
                <p className="text-gray-300 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-gray-700 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                    <p className="text-gray-300">{edu.degree}</p>
                  </div>
                  <span className="text-gray-400 md:text-right mt-2 md:mt-0">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ResumePage;